import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import useStyles from './homepage.styles';
import Header from '../../components/header/header.component';
import PostList from '../../components/postlist/postlist.component';
import CreatePostModal from '../../components/modal/create.post.modal/create.post.modal.component';

import {
  showPostModal
} from '../../redux/post.modal/post.modal.actions';

import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showModal = () => dispatch(showPostModal());

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        className={classes.fab}
        onClick={showModal}
        style={{ background: theme.palette.primary.main }}
      >
        <AddIcon style={{ color: 'white' }} />
      </Fab>
    </Container>
  );
};

export default HomePage;
