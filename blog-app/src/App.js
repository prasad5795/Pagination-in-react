import React from 'react';
import './App.css';
import Blog from './Components/Blog/Blog'
// import {createStore} from 'redux';
// import reducer from './Reducer/index';
import Pagination from './Components/Pagination/Pagination';

// const initialState = [];

// export const store = createStore(reducer,initialState)

function App() {
  return (
    <div className="container padding-class">
      {/* <Blog></Blog> */}
      <Pagination currentPage={14} totalPages={20}></Pagination>
    </div>
  );
}

export default App;
