import React from 'react';

import type { EmailField } from '@payloadcms/plugin-form-builder/types';
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister
} from 'react-hook-form';

import { Input } from '@/payload/components/ui/input';
import { Label } from '@/payload/components/ui/label';

import { Error } from '../Error';
import { Width } from '../Width';

export const Email: React.FC<
  EmailField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
    register: UseFormRegister<FieldValues>;
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type='text'
        {...register(name, {
          pattern: /^\S[^\s@]*@\S+$/,
          required: requiredFromProps
        })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  );
};
