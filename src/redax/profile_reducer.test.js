import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer"
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 12},
        {id: 2, massage: 'Its my first post', likeCount: 11},
        {id: 3, massage: 'you?', likeCount: 12},
        {id: 4, massage: 'first post', likeCount: 11}
    ]
}


it('length of posts should be incremented', () =>{
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5);
});

it('massage of new post should be correct', () =>{
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state,action);

    expect(newState.posts[4].massage).toBe('it-kamasutra');
});

it('after deleting length of messages should be decrement', () =>{
    let action = deletePost (1);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () =>{
    let action = deletePost (1000);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
});