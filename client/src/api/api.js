import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createNewPost = (post) => axios.post(`${URL}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${URL}/posts/${id}`, post);