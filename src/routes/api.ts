
import express from 'express';
import path from "path";
import UserController from "../controllers/userController";
import {ListController} from "../controllers/listController";
import {ItemController} from "../controllers/itemController";

const router = express.Router();
const userController = new UserController();
const listController = new ListController();
const itemController = new ItemController();
router.get('/users/:id', (req, res) => userController.get(req, res));

router.get('/users', (req, res) => userController.getAll(req, res));
router.post('/users', async (req, res) => userController.create(req, res));
router.post('/lists', (req, res) => listController.create(req, res));
router.get('/lists/:id', (req, res) => listController.getListById(req, res));
router.get('/lists/user/:userId', (req, res) => listController.getUserLists(req, res));
router.get('/lists', (req, res) => listController.getAllLists(req, res));
router.post('/item', (req, res) => itemController.createItem(req, res));
router.put('/item/:id/done', (req, res) => itemController.itemDone(req, res));
router.get('/item/list/:listId', (req, res) => itemController.getListItems(req, res));

export default router;