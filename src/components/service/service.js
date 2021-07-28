import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const Api_Key = "AIzaSyAo35UFNxqaGd9YE5EWJEbtaEvsCEswLGA";

export const getBooks = createAsyncThunk(
  "getBooks",
  async ({ searchInputValue, sortingBy, categories }) => {
    const response =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInputValue}${
        categories === "all" ? "" : `+subject:${categories}`
      }&maxResults=30&orderBy=${sortingBy}&key=${Api_Key}
  `);
    return await response.data;
  }
);
export const addBooks = createAsyncThunk(
  "addBooks",
  async ({ searchInputValue, sortingBy, startIndex, categories }) => {
    console.log(startIndex);
    const response =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInputValue}${
        categories === "all" ? "" : `+subject:${categories}`
      }&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}&key=${Api_Key}
  `);
    return await response.data;
  }
);

export const getDetailsBook = createAsyncThunk("getDetailsBook", async (id) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${Api_Key}`
  );
  return await response.data;
});
