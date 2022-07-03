import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  NumberField
} from 'react-admin'

const PostList = (props) => {
    <List {...props}>
      <Datagrid>
        <TextField source='Order ID' />
        <TextField source='Asset Class '/>
        <DateField source='Order Submitted' />
        <TextField source='Instrument Name' />
        <TextField source='Instrument ID' />
        <TextField source='Purchase Type' />
        <NumberField source='Trade Quantity' />
        <NumberField source='Trade Price' />
       <EditButton source='edit' />
       <DeleteButton source='delete' />
      </Datagrid>
    </List>

}
export { PostList };
export default PostList;