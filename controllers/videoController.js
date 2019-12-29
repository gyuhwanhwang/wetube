import { videos } from "../db";
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    // const searchingBy = req.query.term; // 예전 방식
    const {
        query: { term: searchingBy }
    } = req; // 최신 방식
    res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
    res.render("deletVideo", { pageTitle: "Delete Video" });
