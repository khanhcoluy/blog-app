import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import { editPost, showDeleteModal } from '../../redux/post.modal/post.modal.actions';

import useStyles from './post.styles';
import { likePostStart } from '../../redux/post/post.actions';

const Post = ({ post }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const editingPost = () => {
    dispatch(editPost(post));
  }

  const openDeleteModal = () => {
    dispatch(showDeleteModal(post._id));
  }

  const onLikeButtonClick = () => {
    dispatch(likePostStart(post._id));
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>K</Avatar>}
        action={
          <IconButton onClick={editingPost}>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.creator}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
      />
      <CardMedia className={classes.media} image={post.attachment} title="title" />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={onLikeButtonClick}>
          <FavoriteIcon />
          <Typography component="span" colort="textSecondary">
            {`${post.likeCount}`}
          </Typography>
        </IconButton>
        <IconButton aria-label="detele post" onClick={openDeleteModal}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{post.detail}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
