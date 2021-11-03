import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5A7OMJkpx_aj1ZnN_rNKPIR9AYf99F8PoA&usqp=CAU'/>
            {props.massage}
            <div>like {props.likeCount}</div>
        </div>

    )
}

export default Post;