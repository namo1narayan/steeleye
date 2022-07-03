import React from 'react'
import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput } from 'react-admin'

const EditOrder = (props) => {
  return (
    <Edit title='Edit Order' {...props}>
      <SimpleForm>
      <TextInput source='Order ID'/>
        <TextInput source='Asset Class' />
        <DateTimeInput label="Order Date" source='Order Submitted' />
        <TextInput source='Instrument Name' />
        <TextInput source='Instrument ID'/>
        {/* <TextInput multiline source='Question' /> */}
        <TextInput label='Purchase' source='Purchase Type' />
        <NumberInput source='Trade Quantity' />
        <NumberInput source='Trade Price' />
         {/* <DateInput label="published" source='publishedAt' /> */}
      </SimpleForm>
    </Edit>
  )
}

export default EditOrder;