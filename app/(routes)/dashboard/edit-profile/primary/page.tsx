'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { SubmitHandler, useForm } from 'react-hook-form'

import { PrimarySchema, TPrimary } from '@/lib/schema'
import CInput from '@/components/customs/CInput'
import CSelect from '@/components/customs/CSelect'
import PageHeader from '@/components/dashboard/PageHeader'
import Box from '@/components/shared/Box'

export default function Primary() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TPrimary>({
    resolver: zodResolver(PrimarySchema)
  })

  console.log('error', errors)

  const getData: SubmitHandler<TPrimary> = (data) => {
    console.log('data')
    console.log('data', data)
  }

  return (
    <div>
      <PageHeader title='Primary' />

      <Box size='sm'>
        <form onSubmit={handleSubmit(getData)}>
          <CInput
            errorObj={errors}
            isError={errors.name}
            label='name'
            placeholder='this is placeholder'
            register={register}
            name='name'
          />
          <CSelect
            data={['male', 'female']}
            errorObj={errors}
            isError={errors.type}
            label='type'
            placeholder='this is placeholder'
            register={register}
            name='type'
          />
          <CInput
            errorObj={errors}
            isError={errors.condition}
            label='condition'
            placeholder='this is placeholder'
            register={register}
            name='condition'
          />
          <CInput
            errorObj={errors}
            isError={errors.education}
            label='education'
            placeholder='this is placeholder'
            register={register}
            name='education'
          />
          <Button color='danger' type='submit' variant='solid'>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  )
}
