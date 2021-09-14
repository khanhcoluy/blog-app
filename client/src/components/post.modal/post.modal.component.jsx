import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import {
  currentId$,
  isModalShow$,
  postDataSelected$
} from '../../redux/post.modal/post.modal.selectors';
import { hidePostModal } from '../../redux/post.modal/post.modal.actions';

import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import useStyles from './post.modal.styles';
import { createPostStart, updatePostStart } from '../../redux/post/post.actions';

const PostModal = () => {
  const isModalShow = useSelector(isModalShow$);
  const currentId = useSelector(currentId$);
  const postDataSelected = useSelector(postDataSelected$);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    content: '',
    detail: '',
    attachment: ''
  });

  const hideModal = () => {
    dispatch(hidePostModal());
    setPostData({
      creator: '',
      title: '',
      content: '',
      detail: '',
      attachment: ''
    });
  };

  useEffect(() => {
    if (postDataSelected) {
      setPostData(postDataSelected);
    }
  }, [postDataSelected]);

  const { creator, title, content, detail, attachment } = postData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleDone = ({ base64 }) => {
    setPostData({ ...postData, attachment: base64 });
  };

  const handleSubmit = () => {
    if (currentId) {
      dispatch(updatePostStart(postData));
    } else {
      dispatch(createPostStart(postData));
    }

    hideModal();
  };

  const body = (
    <div className={classes.paper} id="modal-title">
      <h2 style={{ textAlign: 'center' }}>
        {currentId ? 'Update Post' : 'Create New Post'}
      </h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.creator}
          label="creator"
          name="creator"
          value={creator}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.title}
          label="title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={2}
          maxRows={4}
          placeholder="Content..."
          name="content"
          onChange={handleChange}
          value={content}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={7}
          maxRows={10}
          placeholder="Detail..."
          name="detail"
          onChange={handleChange}
          value={detail}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={attachment}
          onDone={handleDone}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="secondary"
            component="span"
            fullWidth
            onClick={handleSubmit}
          >
            {currentId ? 'Update' : 'Create'}
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
