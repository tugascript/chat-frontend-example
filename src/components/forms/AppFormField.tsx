import { GridSize, InputProps, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import React from "react";

const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#fff",
  },
  "&:hover label": {
    color: theme.palette.grey[400],
  },
  "& .MuiTextField-root": {
    "& fieldset": { borderColor: "#fff", color: "#fff" },
  },
  "& label.Mui-focused": {
    color: theme.palette.background.default,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.background.default,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[400],
      color: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.background.default,
      color: "#fff",
    },
  },
}));

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  loading: boolean;
  type?: string;
  className?: string;
  labelClassName?: string;
  variant?: "filled" | "standard" | "outlined";
  color?: "primary" | "secondary";
  size?: "medium" | "small";
  multiline?: boolean;
  rows?: number;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  shrink?: boolean;
  required?: boolean;
  disableUnderline?: boolean;
  select?: boolean;
  options?: IOption[];
}

const AppFormField: React.FC<IProps> = ({
  name,
  label,
  placeholder,
  loading,
  type,
  className,
  labelClassName,
  color = "secondary",
  size = "medium",
  variant = "outlined",
  multiline = false,
  rows,
  xs,
  sm,
  md,
  lg,
  xl,
  startAdornment,
  endAdornment,
  shrink,
  required,
  disableUnderline = false,
  select = false,
  options,
}) => {
  const [field, meta, helpers] = useField<unknown>(name);
  const hasErrors = Boolean(meta.error && meta.touched);

  const inputProps: InputProps = {
    className,
    startAdornment,
    endAdornment,
    disableUnderline: disableUnderline,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(
      type === "number" ? parseInt(e.target.value, 10) : e.target.value
    );
  };
  const handleBlur = () => {
    helpers.setTouched(true, true);
  };

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <CssTextField
        label={label}
        color={color}
        size={size}
        select={select}
        // @ts-ignore
        variant={variant}
        required={required}
        type={type}
        fullWidth
        id={`${name}-${label}`}
        value={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={loading}
        placeholder={placeholder}
        multiline={multiline ?? false}
        rows={rows}
        error={hasErrors}
        helperText={hasErrors ? meta.error : null}
        InputProps={inputProps}
        InputLabelProps={{
          className: labelClassName,
          shrink,
        }}
      >
        {select &&
          options &&
          options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
      </CssTextField>
    </Grid>
  );
};

export type { IProps as IAppFormFieldProps };
export default AppFormField;
