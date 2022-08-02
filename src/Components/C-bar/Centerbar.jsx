import React, { useEffect, useState } from "react";
import "./Center-feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
// import database from "./Firebase";

function CenterBar() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     database
//       .collection("post")
//       .onSnapshot((snapshot) =>
//         setPosts(snapshot.docs.map((doc) => doc.data()))
//       );
//   }, []);
  return (
    <div className="Center-feed">
      {/* Header */}
      <div className="feed-header">
        <h1>Home</h1>
      </div>

      {/* tweet Box */}
      <TweetBox />
      {/* {posts.map((post) => { */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>



          {/* // displayName={post.displayName}
          // username={post.username}
          // verified={post.verified}
          // text={post.text}
          // image={post.image}
          // avatar={post.avatar}
        />; */}
      {/* })} */}
    </div>
  );
}
export default CenterBar;
