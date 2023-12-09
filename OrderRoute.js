import  express  from "express";
import asyncHandler from "express-async-handler";
import protect from "../MiddleWar/Auth.js";
import Order from "../Models/order.module.js";

const orderRouter = express.Router();


orderRouter.post(
    "/",
    protect,
    asyncHandler(async (req ,res) => {
            const {
            orderItems, 
            shippingAddress,
            paymentMethod,
            itemsPrice, 
            taxPrice,
            shippingPrice,
            totalPrice,
             } = req.body;

   
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
        return
        } else {
        const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
        });

        const createOrder = await order.save();
        res.status(202).json(createOrder);
    }
   })
);

export default orderRouter;