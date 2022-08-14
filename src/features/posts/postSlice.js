import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

//Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
});

//delete post api
export const deletePosts = createAsyncThunk("posts/deletePosts", ({ id }) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.data);
});

//create post api
export const createPosts = createAsyncThunk(
  "posts/createPosts",
  ({ values }) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          body: values.body,
        }),
      })
      .then((response) => response.data);
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.posts = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      (state.loading = false),
        (state.posts = []),
        (state.error = action.error.message);
    });
    //delete post reducer vs action
    builder.addCase(deletePosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePosts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.posts = state.posts.filter((p) => p.id !== action.payload.id)),
        
        //under this code is work but ui is only empyt because it return empty object
        // (state.posts = action.payload),
        (state.error = "");
    });
    builder.addCase(deletePosts.rejected, (state, action) => {
      (state.loading = false),
        (state.posts = []),
        (state.error = action.error.message);
    });
    //create post reducer vs action
    builder.addCase(createPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPosts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.posts = action.payload),
        (state.error = "");
    });
    builder.addCase(createPosts.rejected, (state, action) => {
      (state.loading = false),
        (state.posts = []),
        (state.error = action.error.message);
    });
  },
});

export default postSlice.reducer;
// export const { getPosts } = postSlice.actions;
