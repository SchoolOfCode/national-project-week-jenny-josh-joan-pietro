import express from "express";
import { searchResourcesByKeyword, getResources } from "../models/users.js";
const router = express.Router();

router.get("/resources", async function (req, res) {
  let result;
  console.log(req.query); // returns object with key value pairs
  if (req.query.keyword !== undefined) {
    result = await searchResourcesByKeyword(req.query.keyword);
  } else {
    result = await getResources();
  }
  res.json({
    success: true,
    payload: result,
  });
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "Is this working yet?!" });
});

export default router;
