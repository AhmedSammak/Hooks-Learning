import axios from "axios";
import React, { useState, useEffect } from "react";

const LearnFetchingData = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .then((err) => console.log(`Error is ${err}`));
  }, [id]);

  return (
    <div>
      <h4> Enter the number of post (1-100) to show its title </h4>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h4> {post.title} </h4>
    </div>
  );
};

export default LearnFetchingData;
