import React from 'react';

export default function FancyBlogPost({children}) {
  return (
    <div
      style={{
        background: 'deeppink',
      }}>
      {children}
    </div>
  );
}
