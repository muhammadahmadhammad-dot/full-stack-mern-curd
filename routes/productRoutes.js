import express from "express"
import { create, deleteProduct, get, getAll, update } from "../controller/ProductController.js";
const route = express.Router();

route.post('/create',create);
route.get('/all-products', getAll)
route.get('/product/:id', get)
route.put('/update/:id', update)
route.delete('/delete/:id', deleteProduct)

export default route;