import { FieldError } from 'react-hook-form'

type TChildren = {
  children: React.ReactNode
}

interface IFieldProps {
  isClearable?: boolean
  isRequired?: boolean
  type?: string
  label?: string
  placeholder?: string
  errorObj: any
  isError: FieldError | undefined
  message?: string
  description?: string
  name: string
  variant?: string
  register: any
}
