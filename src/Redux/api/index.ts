import { create } from "apisauce";

const API = create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

const getAllPostsApi = ({
    _limit = 12,
}) => {
    return API.get("/articles/", {_limit});
};

const getSelectedPostApi = (id: string) => {
    return API.get(`/articles/${id}/`);
};

const getPostsCountApi = ({}) => {
    return API.get("/articles/count");
};

export { getAllPostsApi, getSelectedPostApi, getPostsCountApi };