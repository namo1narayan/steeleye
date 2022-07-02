// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
import CreateOrder from './components/CreateOrder';
import EditOrder from './components/EditOrder';
// import PostOrder from './components/PostOrder';
// import List from './List';
import { PostList } from "./components/postList";

import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
        name='Order'
        list={PostList}
        create={CreateOrder}
        edit={EditOrder}
      />
  </Admin>
);
    

export default App;
