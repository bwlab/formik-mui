import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material/FormControlLabel';
import { FieldProps } from 'formik';

import { CheckboxProps, fieldToCheckbox } from './Checkbox';

/**
 * Exclude props that are passed directly to the control
 * https://github.com/mui-org/material-ui/blob/v3.1.1/packages/material-ui/src/FormControlLabel/FormControlLabel.js#L71
 */
export interface CheckboxWithLabelProps extends FieldProps, CheckboxProps {
  Label: Omit<
    MuiFormControlLabelProps,
    'checked' | 'name' | 'value' | 'control'
  >;
}

export function CheckboxWithLabel({ Label, ...props }: CheckboxWithLabelProps) {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...fieldToCheckbox(props)} />}
      {...Label}
    />
  );
}

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';
