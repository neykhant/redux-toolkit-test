import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePosts } from "./postSlice";

export const ViewPost = () => {
  const post = useSelector((state) => state.post);
  // console.log("post", post)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {post.loading && <div>loading.....</div>}
      {post.error && <div>Error: {post.error} </div>}
      <div>
        <input type="text" placeholder="Enter name..." />
        <input type="text" placeholder="Enter title..." />
      </div>
      {post.posts.length ? (
        <ul>
          {post?.posts?.map((post) => (
            <li key={post.id}>
              {post.title}{" "}
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => dispatch(deletePosts({ id: post.id}))}
              >
                Delete
              </button>{" "}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
