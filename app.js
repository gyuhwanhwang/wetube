import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRoter";
import globalRouter from "./routers/globalRouter";
// default 설정을 안해줬기 때문에 콕집어서 데려옴
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for securerity
app.use(morgan("dev")); // for logging

app.use("/", globalRouter);
app.use("/user", userRouter); //get이 아닌 use사용, /user를 통해 들어온것은 userRouter 사용하겠다
app.use("video", videoRouter);

export default app; // 파일을 불렀을때 app object를 주겠다
