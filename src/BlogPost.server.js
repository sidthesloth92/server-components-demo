import {getBlogPost} from './blog/blog-api';
import LikeButton from './LikeButton.client';
import Comment from './Comment.client';

export default function BlogPost({blog: {id}}) {
  const blog = getBlogPost(id);
  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <p>{blog.markdown}</p>
      <LikeButton blog={blog} />
      <Comment />
    </div>
  );
}
