import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from 'redux-form';
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.massages.map(m => <Message message={m.massage} key={m.id} />);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

//const AddMessageFormRedux = reduxForm({form: 'dialog-add-message-form'}) (AddMessageForm);

// const AddMessageForm = (props) =>{
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component='textarea' name ='newMessageBody' placeholder='Enter your massage' />
//             </div>
//             <div><button>Send</button></div>
//         </form>
//     )
// }
//
// const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);



export default Dialogs;