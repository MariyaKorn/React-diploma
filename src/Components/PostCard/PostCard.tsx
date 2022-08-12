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
          <img src={post.imageUrl} alt="post-image" />
          <div>{post.publishedAt}</div>
          <div>{post.title}</div>
      </div>
    </Link>
  );
};

export default PostCard;