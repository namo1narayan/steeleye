// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CreateOrder from './components/CreateOrder';
import EditOrder from './components/EditOrder';
import PostOrder from './components/PostOrder';
// import List from './List';

function App() {
  return (
    <>
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='Order List'
        list={PostOrder}
        create={CreateOrder}
        edit={EditOrder}
      />
      
    </Admin>


    </>
    
  );
}

export default App;
