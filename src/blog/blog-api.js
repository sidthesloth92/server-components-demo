import {fetch} from 'react-fetch';

export const getBlogPosts = function() {
  return fetch('http://localhost:3000/posts').json();
};

export const getBlogPost = function(id) {
  return fetch(`http://localhost:3000/posts/${id}`).json();
};
