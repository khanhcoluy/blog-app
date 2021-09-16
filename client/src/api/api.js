import axios from 'axios';

const URL = 'https://mini-blog-quockhanh.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createNewPost = (post) => axios.post(`${URL}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${URL}/posts/${id}`, post);
export const deletePost = (id) => axios.delete(`${URL}/posts/${id}`);
export const likePost = (id) => axios.patch(`${URL}/posts/${id}/likePost`);