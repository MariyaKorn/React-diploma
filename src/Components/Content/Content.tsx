import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostsSelectors, setSelectedPost, getPosts } from "../../Redux/reducers/posts";
import { PostDescription } from "../../Types/PostDescription";
import Footer from "../Footer";
import Header from "../Header";
import PostCard from "../PostCard";

const Content: FC = () => {
    const dispatch = useDispatch();
    const post = useSelector(PostsSelectors.getSelectedPost);
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
        dispatch(setSelectedPost(id));
    }, [ ]);

    const anotherPosts = useMemo(() => {
        return postsList
        ?.slice(0, 3)
        .map((post: PostDescription) => <PostCard key={id} post={post} />)
    }, [postsList]);

    return (
        <>
        <Header />
        <div>
            <div>
                <Link to={'/main'}>Home</Link>
                <div>/Post{post?.id}</div>
            </div>
            <div>{post?.title}</div>
            <img src={post?.imageUrl} alt="" />
            <div>{post?.summary}</div>
            <div>{anotherPosts}</div>
        </div>
        
        <Footer />
        </>

    );
};

export default Content;