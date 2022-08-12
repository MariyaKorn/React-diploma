import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { PostDescription } from '../../Types/PostDescription';

import styles from './PostCard.module.css';
import classNames from 'classnames';

type PostCardProps = {
    post: PostDescription;
  };

const PostCard: FC<PostCardProps> = ( { post } ) => {
    
  return (
    <Link to={`/content/${post.id}`}>
      <div className={classNames(styles.postWrapper)}>
          <img src={post.imageUrl} alt="post-image"
          className={classNames(styles.postImg)} />
          <div className={classNames(styles.postInfo)}>
            <div className={classNames(styles.postData)}>{post.publishedAt}</div>
            <div className={classNames(styles.postTitle)}>{post.title}</div>
          </div>
      </div>
    </Link>
  );
};

export default PostCard;