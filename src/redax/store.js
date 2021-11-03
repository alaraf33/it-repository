import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: 'Hi, how are you?', likeCount: 12},
                {id: 2, massage: 'Its my first post', likeCount: 11},
                {id: 1, massage: 'you?', likeCount: 12},
                {id: 2, massage: 'first post', likeCount: 11}
            ],
            newPostText: 'it-kamasutra' // write text
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergio'},
                {id: 2, name: 'Anja'},
                {id: 3, name: 'Jon'},
                {id: 4, name: 'Irina'},
                {id: 5, name: 'Valentina'}
            ],
            massages: [
                {id: 1, massage: 'Hi'},
                {id: 2, massage: 'How are you?'},
                {id: 3, massage: 'You'},
                {id: 4, massage: 'Yo'},
                {id: 5, massage: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState(){
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.state = store;