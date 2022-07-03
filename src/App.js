// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
import CreateOrder from './components/CreateOrder';
import EditOrder from './components/EditOrder';
// import PostOrder from './components/PostOrder';
import { PostList } from "./components/postList";

import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://github.com/namo1narayan/json/blob/main/db.json");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
       name="posts"
    // path="https://github.com/namo1narayan/json/blob/main/db.json"
        list={PostList}
        create={CreateOrder}
        edit={EditOrder}
      />
  </Admin>
);
    

export default App;
