import {getBlogPosts} from './blog/blog-api';
import BlogPost from './BlogPost.server';
import FancyBlogPost from './FancyBlogPost';

export default function BlogPostsList() {
  const blogs = getBlogPosts();
  return (
    <>
      {blogs.map((blog, index) => (
        <>
          {index % 2 ? (
            <BlogPost key={blog.id} blog={blog} />
          ) : (
            <FancyBlogPost>
              <BlogPost key={blog.id} blog={blog} />
            </FancyBlogPost>
          )}
        </>
      ))}
    </>
  );
}
