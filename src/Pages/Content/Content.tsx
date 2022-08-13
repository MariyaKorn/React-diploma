import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostsSelectors, setSelectedPost, getPosts } from "../../Redux/reducers/posts";
import { PostDescription } from "../../Types/PostDescription";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PostCard from "../../Components/PostCard";
import classNames from "classnames";
import styles from './Content.module.css';
import Loader from "../../Components/Loader";

const Content: FC = () => {
    const dispatch = useDispatch();
    const post = useSelector(PostsSelectors.getSelectedPost);
    const isSelectedPostLoading = useSelector(PostsSelectors.getSelectedPostLoading)
    const postsList = useSelector(PostsSelectors.getPosts);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getPosts({
            _limit: 30,
            _sort: '',
            _start: 0,
        }));
    }, [ ]);

    useEffect(() => {
        if (id) {
            dispatch(setSelectedPost(id));
        }
    }, [id]);

    const anotherPosts = useMemo(() => {
        return postsList
        ?.slice(0, 3)
        .map((post: PostDescription) => <PostCard key={id} post={post} />)
    }, [postsList]);

    return (
        <>
        <Header />
        {isSelectedPostLoading ? 
        (<div className={classNames(styles.loader)}><Loader /></div>) 
        : (<div className={classNames(styles.contentContainer)}>
            <div className={classNames(styles.contentNav)}>
                <Link to={'/main'} className={classNames(styles.contentLink)}>Home</Link>
                <div>/ Post{post?.id}</div>
            </div>
            <div className={classNames(styles.contentTitle)}>{post?.title}</div>
            <img src={post?.imageUrl} alt="content-image" className={classNames(styles.contentImg)} />
            <div className={classNames(styles.contentText)}>{post?.summary}</div>
            <div className={classNames(styles.anotherPosts)}>{anotherPosts}</div>
        </div>)}
        <Footer />
        </>

    );
};

export default Content;