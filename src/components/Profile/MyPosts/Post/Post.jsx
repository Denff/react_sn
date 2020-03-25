import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://biographe.ru/wp-content/uploads/2019/09/234234324-350x350.png" />
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;