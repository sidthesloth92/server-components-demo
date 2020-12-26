import React from 'react';

export default function Comment() {
  const [comment, setComment] = React.useState('');
  return (
    <input
      value={comment}
      onChange={({target: {value}}) => setComment(value)}
    />
  );
}
