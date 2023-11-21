'use client'

import React from 'react'
import { IFieldProps } from '@/index'
import { Input } from '@nextui-org/input'
import { FieldError } from 'react-hook-form'

export default function CInput({
  isClearable,
  isRequired,
  type = 'text',
  label,
  placeholder,
  isError,
  errorObj,
  message,
  description,
  variant,
  register,
  name,
  ...rest
}: IFieldProps) {
  return (
    <Input
      className='my-6'
      classNames={{
        label:
          'text-black/50 dark:text-white/90 font-semibold text-sm uppercase',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60'
        ],
        innerWrapper: ['bg-transparent'],
        inputWrapper: [
          'h-14',
          'shadow-lg dark:shadow-xl',
          'border-[0.5px] border-white/30 dark:border-white/10',
          isError
            ? 'bg-danger/10 border-danger border-[1px]'
            : 'bg-default-200/50',
          'dark:bg-white/20',
          'dark:hover:bg-default/70',
          'group-data-[focused=true]:bg-default-200/50',
          '!cursor-text'
        ],
        description: 'text-slate-500 dark:text-light/80 text-sm',
        errorMessage: 'text-md'
      }}
      isClearable={isClearable}
      isRequired={isRequired}
      type={type}
      label={label}
      placeholder={placeholder}
      description={description}
      isInvalid={isError}
      errorMessage={errorObj[name]?.message}
      variant={variant}
      {...register(name)}
      {...rest}
    />
  )
}
