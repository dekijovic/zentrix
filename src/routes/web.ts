
import express from 'express';
import path from "path";
import UserController from "../controllers/userController";
import {ListController} from "../controllers/listController";
import {ItemController} from "../controllers/itemController";
import {WebController} from "../controllers/webController";

const router = express.Router();
const webController = new WebController();
router.get('/', (req, res) => webController.renderAllUsers(req, res));
router.get('/user/:userId', (req, res) => webController.renderUserList(req, res));
router.get('/list/:listId', (req, res) => webController.renderUserListItems(req, res));
export default router;