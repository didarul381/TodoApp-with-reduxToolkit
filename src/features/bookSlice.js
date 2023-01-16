//slice means collection of logics

import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {


    books:[
        {id:1,title:'I Love bangladesh..',author:'sakib'},
        {id:2,title:'I Love bangladesh people..',author:'sakib'}
    ]
}

export const bookSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
              state.books.push(action.payload)
        },
        deletBook:(state,action)=>{
            const id=action.payload;
            state.books=state.books.filter(book=>book.id!==id);
      },
      updateBook:(state,action)=>{
        const {id,title,author}=action.payload;
        const isBookExist=state.books.filter(book=>book.id===id);
        if( isBookExist){
            isBookExist[0].title=title;
            isBookExist[0].author=author;
        }
  }
    }
})
export const{ showBooks,addBook,deletBook,updateBook}=bookSlice.actions
export default bookSlice.reducer;