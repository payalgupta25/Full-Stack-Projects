import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { commentOnPost, createPost , deletePost , likePost , getPosts , getFollowingPosts , getLikedPosts , getUserPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create",protectRoute,createPost);
router.delete("/:id",protectRoute,deletePost);
router.post("/comment/:id",protectRoute,commentOnPost);
router.post("/like/:id",protectRoute,likePost);
router.get("/getPosts",protectRoute,getPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/liked/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);

export default router;