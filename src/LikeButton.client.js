import {likeBlogPost} from './blog/blog-api';

import React from 'react';
import {useLocation} from './LocationContext.client';

export default function LikeButton({blog}) {
  const [, setLocation] = useLocation();
  const handleClick = async () => {
    await likeBlogPost(blog.id);
    setLocation((loc) => ({
      ...loc,
      likes: blog.likes + 1,
    }));
  };

  const likeBlogPost = async (id) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      ...blog,
      likes: blog.likes + 1,
    });

    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers,
      body: raw,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return <span onClick={handleClick}>Likes: {blog.likes}</span>;
}
