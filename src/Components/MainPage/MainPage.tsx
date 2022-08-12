import React, { FC } from 'react';
import { PostDescription } from '../../Types/PostDescription';
import styles from './MainPage.module.css';
import classNames from 'classnames';

type MainPageProps = {
    post: PostDescription;
  };

const MainPage: FC<MainPageProps> = ( props ) => {
    const { post } = props;
  return (
      <div className={classNames(styles.postWrapper)}>
          <img src={post.imageUrl} alt="post-image" />
          <div>{post.publishedAt}</div>
          <div>{post.title}</div>
    </div>
  );
};

export default MainPage;