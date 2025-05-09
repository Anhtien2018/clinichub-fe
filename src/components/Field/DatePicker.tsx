import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { viVN } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/vi";

interface CustomDatePickerProps {
  name: string;
  value: string | null;
  onChange: (name: string, value: string) => void;
  dateFormat?: string;
}

export default function CustomDatePicker({
  name,
  value,
  onChange,
  dateFormat = "DD/MM/YYYY",
}: CustomDatePickerProps) {
  const dateValue = value ? dayjs(value, dateFormat) : null;

  return (
    <Box>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="vi"
        localeText={
          viVN.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DatePicker
          label=""
          format={dateFormat}
          value={dateValue}
          onChange={(p0) => {
            const date = dayjs(p0);
            if (date.isValid()) {
              onChange(name, date.format(dateFormat)); // Cập nhật giá trị cho Formik
            }
          }}
          slotProps={{
            textField: {
              placeholder: "Ngày/tháng/năm",
              size: "small",
              readOnly: true,
            },
            day: {
              sx: {
                fontSize: {
                  lg: "1rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "1rem",
                },
              },
            },
          }}
          dayOfWeekFormatter={(date) => dayjs(date).format("dd")}
          sx={{
            width: "100%",
            "&.MuiPickersSectionList-root": {
              padding: "10px 0",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
