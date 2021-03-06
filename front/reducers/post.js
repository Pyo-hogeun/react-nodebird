export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: '호근표',
        },
        contents: '게시글 첫번쨰',
        img: 'https://picsum.photos/100',
    }],
    imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};
const addDummy = {
    type: ADD_DUMMY,
    data: {
        contents: '게시글 첫번쨰',
        UserId: 1,
        User: {
            nickname: '호근표',
        },
    }
}


const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [ action.data, ...state.mainPosts ],
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

