/*archivo que para centralizar validaciones */

import { FormControl } from '@angular/forms';

export const cantBePepito = (control: FormControl) => {
  const value: string = control.value.trim().toLowerCase();

  if (value === 'pepito') {
    return {
      noPepito: true,
    };
  }

  return null;
};
