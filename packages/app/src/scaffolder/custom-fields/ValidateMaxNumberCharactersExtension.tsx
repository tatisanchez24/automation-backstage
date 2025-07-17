import { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import type { FieldValidation } from '@rjsf/utils';
import FormHelperText from '@material-ui/core/FormHelperText';


export const ValidateMaxNumberCharacters = ({
    onChange, rawErrors, required, formData,
}: FieldExtensionComponentProps<string>) => {
  return (
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0 && !formData}
    >
      <InputLabel htmlFor="validateMaxNumberCharacters">Name</InputLabel>
      <Input
        id="validateMaxNumberCharacters"
        aria-describedby="maxNumberCharacters"
        onChange={e => onChange(e.target?.value)}
      />
      <FormHelperText id="maxNumberCharacters">
        Must be 63 characters or fewer.
      </FormHelperText>
    </FormControl>
  );
}

/*
 Validación independiente para longitud máxima
*/
export const maxNumberCharactersValidation = (
  value: string,
  validation: FieldValidation,
) => {
  if (value.length > 63) {
    validation.addError('Must be 63 characters or fewer.');
  }
};
