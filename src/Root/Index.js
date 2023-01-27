import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowPost from '../fetchDataUsingDeduxToolkit/ShowPost';
import Navr from '../layout/Navr';
import AddBook from '../routers/AddBook';
import BookView from '../routers/BookView';
import EditBook from '../routers/EditBook';
import Error from '../routers/Error';
import Home from '../routers/Home';

const Index = () => {
    return <BrowserRouter>
     <Navr></Navr>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-book' element={<AddBook></AddBook>}></Route>
        <Route path='/show-book' element={<BookView></BookView>}></Route>
        <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
        <Route path='/posts' element={<ShowPost></ShowPost>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
       
    </Routes>
    </BrowserRouter>
};

export default Index;