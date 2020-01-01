import routes from "../routes";
import Video from "../models/Video";
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}); // 모든 Video를 찾아줌
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    // const searchingBy = req.query.term; // 예전 방식
    const {
        query: { term: searchingBy }
    } = req; // 최신 방식
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
    res.render("deletVideo", { pageTitle: "Delete Video" });
