import { createSlice } from "@reduxjs/toolkit";
import {
  getBooks,
  getDetailsBook,
  addBooks,
} from "../components/service/service";

const bookSlice = createSlice({
  name: "booksSlice",
  initialState: {
    loading: false,
    errorLoading: false,
    detailsLoader: false,
    detailsBook: null,
    books: null,
    searchInputValue: "",
    sortingBy: "relevance",
    categories: "all",
    startIndex: 29,
    buttonLoading: false,
    errorDetails: false,
  },
  reducers: {
    changeInput: (state, action) => {
      state.searchInputValue = action.payload;
    },
    changeSorting: (state, action) => {
      state.sortingBy = action.payload;
    },
    changeStartIndex: (state, action) => {
      state.startIndex = state.startIndex + 29;
    },
    changeCategories: (state, action) => {
      console.log(action.payload);
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.loading = false;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.errorLoading = true;
    },
    [addBooks.pending]: (state, action) => {
      state.buttonLoading = true;
    },
    [addBooks.fulfilled]: (state, action) => {
      state.buttonLoading = false;
      state.books.items = [...state.books.items, ...action.payload.items];
    },
    [addBooks.rejected]: (state, action) => {
      state.buttonLoading = false;
    },
    [getDetailsBook.pending]: (state, action) => {
      state.detailsLoader = true;
    },
    [getDetailsBook.fulfilled]: (state, action) => {
      state.detailsLoader = false;
      state.detailsBook = action.payload;
    },
    [getDetailsBook.rejected]: (state, action) => {
      state.detailsLoader = false;
      state.errorDetails = true;
    },
  },
});

export default bookSlice.reducer;
export const {
  changeInput,
  changeSorting,
  changeStartIndex,
  changeCategories,
} = bookSlice.actions;
