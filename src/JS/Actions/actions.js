import {ADD_ARTICLE} from "../Constants/actions-types";

const addPost = (newPost) => {
    return (
        {
            type: ADD_ARTICLE,
            payload:newPost
        }
    );
}

export default Actions;
