import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Option } from "@/types/interface";

interface CustomSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void; // ✅ Dùng SelectChangeEvent cho đúng kiểu
  options: Option[];
  fullWidth?: boolean;
  name?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  fullWidth = true,
  name,
}: CustomSelectProps): React.ReactElement {
  return (
    <FormControl fullWidth={fullWidth} size="small">
      <Select
        labelId="custom-select-label"
        value={value}
        name={name}
        onChange={onChange} // Truyền event thẳng về Formik
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
