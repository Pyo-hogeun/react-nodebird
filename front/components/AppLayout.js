import React from 'react';
import { Menu, Input, Row, Col, Card, Avatar } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
const dummy = {
    nickname: '표호근',
    Post: [], 
    Followings: [],
    Followers: [],
    isLoggedIn: false,
};

const AppLayout = ({children}) => {
    return (
        <>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                    <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                    <Menu.Item key="mail">
                        <Input.Search enterButton style={{ verticalAlign:'middle'}}/>
                    </Menu.Item>
                </Menu>
                
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        {
                            dummy.isLoggedIn ?
                            <UserProfile />
                                :
                            <LoginForm />
                        }
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>맥북테스트3차</Col>
                </Row> 
                
            </div>
        </>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node,
}
export default AppLayout;