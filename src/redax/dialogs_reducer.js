const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MASSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                massages: [...state.massages, {id: 6, massage: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>({type: SEND_MASSAGE, newMessageBody})

export default dialogsReducer;