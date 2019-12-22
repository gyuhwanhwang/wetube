import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
// default 설정을 안해줬기 때문에 콕집어서 데려옴
const app = express();

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for securerity
app.use(morgan("dev")); // for logging

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter); //get이 아닌 use사용, /user를 통해 들어온것은 userRouter 사용하겠다

export default app; // 파일을 불렀을때 app object를 주겠다
