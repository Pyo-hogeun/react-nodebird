import React, { useState, useEffect, useCallback } from 'react';
import { Card, Icon, Button, Avatar } from 'antd';
import PropTypes  from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const PostCard = ({ post }) => {
    const [ commentFormOpened, seCommentFormOpened] = useState('');

    return (
        <div>
            <Card
                key={+post.createdAt}
                cover={post.img && <img alt="example" src={post.img} />}
                actions={[
                    <Icon type="retweet" key="retweet" />,
                    <Icon type="heart" key="heart" />,
                    <Icon type="message" key="message" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
                extra={<Button>팔로우</Button>}
                style={{margin: '1rem 0'}}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
        </div>
    )
}
PostCard.propTypes = {
    post : PropTypes.shape({
        user: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
}
export default PostCard;