import React from "react";
import Post1 from "./post/Post1";
import Post2 from "./post/Post2";
import Post3 from "./post/Post3";

const Posts = () => {
  return (
    <div className=" h-[80vh] overflow-y-scroll overflow-x-hidden no-scrollbar ">
      <Post1 />
      <Post2 />
      <Post3 />
    </div>
  );
};

export default Posts;
