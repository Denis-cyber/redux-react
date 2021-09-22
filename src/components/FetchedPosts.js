import React from 'react';
import Post from './Post';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>;
  }

  return posts.map((post) => <Post post={post} key={post} />);
};
