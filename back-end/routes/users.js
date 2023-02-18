import express from "express";
import { getUser } from "../controllers/user.js";


const routes = express.Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
routes.get("/find:userID", getUser);


export default  routes;
