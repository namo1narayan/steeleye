import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EditOrder = (props) => {
  return (
    <Edit title='Edit Order' {...props}>
      <SimpleForm>
        <TextInput source='Topic' />
        <TextInput multiline source='Question' />
        <TextInput label='option' multiline source='options' />
        <DateInput label="published" source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default EditOrder;