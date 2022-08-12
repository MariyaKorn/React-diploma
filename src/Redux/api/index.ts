import { create } from "apisauce";

const API = create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

const getAllPostsApi = ({
}) => {
    return API.get("/articles");
};

export { getAllPostsApi };