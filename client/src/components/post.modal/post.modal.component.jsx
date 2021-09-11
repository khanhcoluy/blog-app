import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import { isModalShow$ } from '../../redux/post.modal/post.modal.selectors';
import { hidePostModal } from '../../redux/post.modal/post.modal.actions';

import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import useStyles from './post.modal.styles';

const PostModal = () => {
  const isModalShow = useSelector(isModalShow$);
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hidePostModal());
  const classes = useStyles();

  const body = (
    <div className={classes.paper} id="modal-title">
      <h2 style={{ textAlign: 'center' }}>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField className={classes.creator} label="creator" value="" required />
        <TextField className={classes.title} label="title" value="" required />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={3}
          rowsMax={5}
          placeholder="Content..."
          value=""
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder="Detail..."
          value=""
        />
        <FileBase64 accept="image/*" multiple={false} type="file" />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="secondary"
            component="span"
            fullWidth
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal open={isModalShow} onClose={hideModal}>
      {body}
    </Modal>
  );
};

export default PostModal;
