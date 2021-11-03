import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10  =  maxLengthCreator(10);

let AddNewPostForm = (props) =>  {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name= 'newPostText' component={Textarea}  placeholder={'Post message'}
                   validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
   )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} massage={p.massage} likesCount={p.likesCount}/>);


    let newPostElement = React.createRef();


    let onAddPost = (values) => {
        props.addPost(values.newPostText);  //функция с мир а бизнеса
    }

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
});

export default MyPosts;