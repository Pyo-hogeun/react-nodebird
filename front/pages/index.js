import React from 'react';
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '호근표',
        },
        contents: '게시글 첫번쨰',
        img: 'https://picsum.photos/100',
    }],
}
const Home = () => {
    return (
        <>
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c} />
                )
            })}
        </>
    );
};

export default Home;