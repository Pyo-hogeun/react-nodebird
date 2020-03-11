import React, { useState, useEffect, useCallback } from 'react';
import { Card, Icon, Button, Avatar, Form, Input, List, Comment } from 'antd';
import PropTypes  from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    const [ commentFormOpened, setCommentFormOpened] = useState(false);
    const [ commentText, setCommentText ] = useState('');
    const { me } = useSelector(state => state.user);
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onChangeCommentText = useCallback((e)=>{
        setCommentText(e.target.value);
    },[]);

    const onSubmitComment = useCallback((e)=>{
        e.preventDefault();
        if(!me){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
            },
        });
    }, [me && me.id])

    useEffect(() => {
        setCommentText('');
    },[commentAdded === true]);// 댓글 등록완료되면 input 비우기
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
            <Form onSubmit={onSubmitComment}>
                <Form.Item>
                    <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={isAddingComment}>저장</Button>
            </Form>
            <List 
                header={`${post.Comments ? post.Comments.length : 0 } 댓글`}
                itemLayout="horizontal"
                dataSource={post.Comments || []}
                renderItem={item=>(
                        <li>
                            <Comment 
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                    )
                }
            />

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