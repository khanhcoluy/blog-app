import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Post from '../post/post.component';

import { fetchPostsStart } from '../../redux/post/post.actions';
import { postsState$ } from '../../redux/post/post.selectors';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      justifyContent="space-between"
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={4}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
