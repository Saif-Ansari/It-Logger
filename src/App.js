import React,{useEffect} from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import  SearchBar from './components/Layout/SearchBar';
import  Logs  from './components/Logs/Logs';
import { AddBtn } from './components/Layout/AddBtn';
import AddLogModal  from './components/Logs/AddLogModal';
import EditLogModal  from './components/Logs/EditLogModal';
import AddTechModal from './components/Techs/AddTechModal';
import TechListModal from './components/Techs/TechListModal';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  useEffect(()=>{
    //Initialize materialize JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <SearchBar />
      <div className='container'>
         <AddBtn />
         <AddLogModal />
         <EditLogModal />
         <AddTechModal />
         <TechListModal />
         <Logs />
      </div>
    </Provider>
  );
}

export default App;
