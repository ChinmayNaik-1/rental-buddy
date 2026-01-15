import express from "express"
import { getCards, updateState,getById, filters } from "../routescontroller/customercontroller.js";
import { adGetCards,adCreate,adUpdate,adDeleteCard, adGetByID } from "../routescontroller/admincontroller.js";
import { login, showusers, signup } from "../routescontroller/authcontroller.js";
import { protect } from "../middleware/auth.js";

const routes=express.Router()

//admin routes
routes.get("/admin",protect,adGetCards);
routes.get("/admin/:id",protect,adGetByID);
routes.post("/admin/create",protect,adCreate);
routes.put("/admin/:id",protect,adUpdate);
routes.delete("/admin/:id",protect,adDeleteCard);


//customer routes
routes.get("/",getCards);      
routes.put("/:id",updateState);
routes.get("/filter",filters);
routes.get("/:id",getById);


//auth routes
routes.post("/user/signup",signup);
routes.post("/user/login",login);
routes.get("/user",protect,showusers);

export default routes