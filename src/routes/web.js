import express from "express";
import { getHomepage, getDetailpage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomepage);
  router.get("/detail/user/:userId", getDetailpage);
  router.get("/about", (req, res) => {
    res.send(`I'm Quang Long`);
  });

  return app.use("/", router);
};

export default initWebRoute;