import React from 'react'
import { Create, SimpleForm, TextInput, DateTimeInput, NumberInput } from 'react-admin'

const CreateOrder = (props) => {
  return (
    <Create title='Create a Order' {...props}>
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
    </Create>
  )
}

export default CreateOrder;