import express from "express";
import { login, logout } from "../controllers/auth.js";
// import { getUser } from "../controllers/user";


const routes = express.Router();

const register = (req, res) => {
        res.send('ok')
}

routes.post("/register", register);
// routes.get("/register", (req, res) => {
//     res.send('ok')
// });

routes.post("/login", login);
routes.post("/logout", logout);


export default  routes;