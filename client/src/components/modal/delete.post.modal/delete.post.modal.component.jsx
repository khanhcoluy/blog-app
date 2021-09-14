import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from '@material-ui/core';

import { hideDeleteModal } from '../../../redux/post.modal/post.modal.actions';
import { deletePostStart } from '../../../redux/post/post.actions';

import { currentId$, isDeleteModalShow$ } from '../../../redux/post.modal/post.modal.selectors';

import useStyles from './delete.post.modal.styles';

const DeletePostModal = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const currentId = useSelector(currentId$);
  const isDeleteShow = useSelector(isDeleteModalShow$);

  const handleDelete = () => {
    dispatch(deletePostStart(currentId));
    handleClose();
  }

  const handleClose = () => {
    dispatch(hideDeleteModal());
  }

  const body = (
    <div className={classes.paper} id="modal-title">
      <h4 style={{ textAlign: 'center' }}>Are you sure want to delete ?</h4>
      <div className={classes.footer}>
          <Button
            variant="contained"
            color="secondary"
            component="span"
            fullWidth
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="default"
            component="span"
            fullWidth
            onClick={handleClose}
            style={{ marginTop: '10px' }}
          >
            Cancel
          </Button>
        </div>
    </div>
  );

  return (
    <Modal open={isDeleteShow} onClose={handleClose}>
      {body}
    </Modal>
  );
};

export default DeletePostModal;
