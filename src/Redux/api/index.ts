import { create } from "apisauce";

const API = create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

const getAllPostsApi = ({
    _limit = 30,
    _sort = '',
    _start = 0

}) => {
    return API.get("/articles/", {_limit, _sort, _start});
};

const getSelectedPostApi = (id: string) => {
    return API.get(`/articles/${id}/`);
};

export { getAllPostsApi, getSelectedPostApi };