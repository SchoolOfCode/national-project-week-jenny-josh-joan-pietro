import express from "express";
import {
  searchResourcesByKeyword,
  getResources,
  searchResourcesByTopic,
  deleteResourceById,
  createNewResource,
  searchResourcesByUsername,
  getResourcesbyLimits,
} from "../models/users.js";
const router = express.Router();

router.get("/resources", async function (req, res) {
  let result;
  console.log(req.query); // returns object with key value pairs
  if (req.query.limits !== undefined) {
    result = await getResourcesbyLimits(req.query.limits);
    console.log("this is receiving a recent articles search");
  } else if (req.query.keywords !== undefined) {
    result = await searchResourcesByKeyword(req.query.keywords);
    console.log("this is receiving a search for keywords");
  } else if (req.query.topic !== undefined) {
    result = await searchResourcesByTopic(req.query.topic);
    console.log("this is receiving a search by topic");
  } else if (req.query.username !== undefined) {
    result = await searchResourcesByUsername(req.query.username);
  } else {
    result = await getResources();
  }
  res.json({
    success: true,
    payload: result,
  });
});

router.delete("/resources/:id", async function (req, res) {
  let id = req.params.id;
  let result = await deleteResourceById(id);
  res.json({
    success: true,
    payload: result,
  });
});

router.post("/resources", async function (req, res) {
  let newResource = req.body;
  let result = await createNewResource(newResource);
  res.json({
    success: true,
    payload: result,
  });
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "Please submit a valid query" });
});

export default router;
