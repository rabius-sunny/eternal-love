import React from 'react'
import { IFieldProps } from '@/index'
import { Select, SelectItem } from '@nextui-org/react'

interface IProps extends IFieldProps {
  data: string[]
}
export default function CSelect({
  data,
  isRequired,
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
}: IProps) {
  return (
    <Select
      items={data.map((item) => ({ label: item.toUpperCase(), value: item }))}
      className=''
      classNames={{
        label:
          'text-black/50 dark:text-white/90 font-semibold text-sm uppercase',
        base: [
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60'
        ],
        trigger: [
          'bg-transparent',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60',
          'text-black/90 dark:text-white/90'
        ],
        innerWrapper: ['bg-transparent'],
        mainWrapper: [
          'h-14',
          'rounded-xl',
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
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      description={description}
      isInvalid={isError}
      errorMessage={errorObj[name]?.message}
      variant={variant}
      {...register(name)}
      {...rest}
    >
      {(animal: { label: string; value: string }) => (
        <SelectItem key={animal.value}>{animal.label}</SelectItem>
      )}
    </Select>
  )
}
