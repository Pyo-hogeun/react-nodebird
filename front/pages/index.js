import React, { useEffect, useReducer } from 'react';
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    // console.log(user);
    useEffect(()=>{ 
        // dispatch(loginAction);
        // dispatch(logoutAction);
        // dispatch(loginAction);
    }, []);

    return (
        <div>
            {/* {user ? <div>로그인했습니다: { user.nickname }</div> : <div>로그아웃했습니다</div>} */}
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c} />
                )
            })}
        </div>
    );
};

export default Home;