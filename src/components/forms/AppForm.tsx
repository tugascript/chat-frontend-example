import type { GridDirection, GridSize, GridSpacing } from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import type { FormikConfig, FormikValues } from "formik";
import { Formik } from "formik";
import React from "react";

export interface IProps extends FormikConfig<FormikValues | any> {
  children: React.ReactNode;
  className?: string;
  direction?: GridDirection;
  spacing?: GridSpacing;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  item?: boolean;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const AppForm: React.FC<IProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  direction = "column",
  spacing = 1,
  alignItems = "stretch",
  justifyContent = "flex-start",
  item = true,
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  className,
  ...rest
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    {...rest}
  >
    {({ handleSubmit, handleReset, handleBlur, handleChange }) => (
      <Grid
        container
        item={item}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        direction="column"
        alignItems="stretch"
        justifyContent="flex-start"
        onSubmit={handleSubmit}
        onReset={handleReset}
        onAbort={handleBlur}
        onChange={handleChange}
        component="form"
      >
        <Grid
          item
          container
          className={className}
          direction={direction}
          spacing={spacing}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          {children}
        </Grid>
      </Grid>
    )}
  </Formik>
);

export default AppForm;
