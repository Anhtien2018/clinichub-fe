"use client";

import React, { forwardRef, type InputHTMLAttributes } from "react";
import { Box, TextField, Typography, type AlertColor } from "@mui/material";
import { defaultStyleInput, errorStyleInput } from "@/styles/StyleInput";
import { useMediaQuery } from "@mui/material";
import { theme } from "@/themes/theme";

interface FieldInputProps {
  sx?: object;
  sxError?: object;
  label: string;
  helperText?: string;
  name: string;
  typeInput?: InputHTMLAttributes<HTMLInputElement>["type"];
  severity?: AlertColor;
  defaultValue?: string;
  errorText?: string;
  value: string;
  isError: boolean;
  disabled?: boolean;
  suffixIcon?: React.JSX.Element;
  prefixIcon?: React.JSX.Element;
  placeholder?: string;
  size?: "small" | "medium";
  multiline?: boolean;
  rows?: number;
  maxRow?: number;
  minRows?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  accept?: string | undefined;
  autoComplete?: string;
}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (
    {
      label,
      name,
      sx,
      sxError,
      value,
      isError,
      helperText,
      onChange,
      onBlur,
      onFocus,
      disabled,
      defaultValue,
      prefixIcon,
      suffixIcon,
      placeholder,
      size = "medium",
      typeInput = "text",
      errorText = "something wrong",
      autoComplete = "on",
      minRows = 1,
      inputRef,
      multiline,
      accept,
      rows,
      maxRow,
      onKeyDown,
    }: FieldInputProps,
    ref
  ) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <TextField
          rows={rows}
          maxRows={maxRow}
          multiline={multiline}
          sx={{ ...defaultStyleInput, ...sx }}
          label={label}
          name={name}
          value={value}
          placeholder={placeholder}
          error={isError}
          defaultValue={defaultValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange !== undefined) onChange(event);
          }}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            if (onBlur !== undefined) onBlur(event);
          }}
          onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
            if (onFocus !== undefined) onFocus(event);
          }}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (onKeyDown !== undefined) onKeyDown(event);
          }}
          minRows={minRows}
          helperText={helperText}
          type={typeInput}
          slotProps={{
            input: {
              startAdornment: prefixIcon,
              endAdornment: suffixIcon,
            },
          }}
          inputProps={{
            accept,
            style: {
              fontSize: isMobile ? "0.875rem" : "1rem",
            },
          }}
          autoComplete={autoComplete}
          disabled={disabled}
          size={size}
          inputRef={inputRef || ref}
        />
        {isError ? (
          <Typography
            sx={{
              color: "red",
              fontSize: {
                lg: "0.8rem",
                md: "0.8rem",
                sm: "0.875rem",
                xs: "0.875rem",
              },
              ...errorStyleInput,
              ...sxError,
            }}
          >
            {errorText}
          </Typography>
        ) : null}
      </Box>
    );
  }
);

FieldInput.displayName = "FieldInput";
