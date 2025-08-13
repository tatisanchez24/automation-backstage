import { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';
import type { FieldValidation } from '@rjsf/utils';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export const ValidatePackageName = ({
  onChange,
  rawErrors,
  required,
  formData,
}: FieldExtensionComponentProps<string>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Eliminar espacios y convertir a minúsculas
    value = value.replace(/\s+/g, '').toLowerCase();

    // Validar longitud
    if (value.length <= 63) {
      onChange(value);
    }
  };

  return (
    // TODO Agregar espacio, mayusculas
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0}
    >
      <InputLabel htmlFor="validatePackageName">Nombre del paquete</InputLabel>
      <Input
        id="validatePackageName"
        value={formData ?? ''}
        onChange={handleChange}
        aria-describedby="packageNameHelp"
      />

      <FormHelperText id="packageNameHelp">
        Usa solo letras minúsculas, números y guiones (-). Máximo 63 caracteres.
        No se permiten espacios, mayúsculas, guiones bajos, ni guiones al
        inicio, final o consecutivos.
      </FormHelperText>
    </FormControl>
  );
};

export const validatePackageName = (
  value: string,
  validation: FieldValidation,
) => {
  const isValid = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value) && value.length <= 63;

  if (!isValid) {
    validation.addError(
      'Debe contener solo letras minúsculas, números y guiones (-), sin guiones al inicio/final ni consecutivos, y máximo 63 caracteres.',
    );
  }
};
