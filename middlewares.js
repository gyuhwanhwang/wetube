import multer from "multer";
import routes from "./routes";

// /uploads/videos와 같이 앞에 /붙이면 내 프로젝트가 아닌 컴퓨터의 root의 폴더 생성
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");
