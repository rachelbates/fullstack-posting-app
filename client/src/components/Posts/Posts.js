import React from 'react'
import { useSelector } from 'react-redux';

import Post from './Post/Post'
import useStyles from './styles';



const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        <div>
            <h1>Posts</h1>
            <Post />
        </div>
    )
}

export default Posts
