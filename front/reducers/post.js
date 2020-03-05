export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '호근표',
        },
        content: '게시글 첫번쨰',
        img: 'https://picsum.photos/300',
    }],
    imagePaths: [],
    addPostErrorReason: '',
    isAddingPost: false,
    postAdded: false,
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const dummyPost = {
    id: 2,
    User: {
        id: 1,
        nickname: '호로근',
    },
    content: '이건 더미더미',
    Comments: [],
}



const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                postAdded: false,
                addPostErrorReason: '',
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                postAdded: true,
                mainPosts: [dummyPost, ...state.mainPosts],
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                postAdded: false,
                addPostErrorReason: action.error,
            };
        }
        default: {
            return{
                ...state,
            }
        }
    }
}

export default reducer;

