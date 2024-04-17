import { Router } from "express";

const router = Router();

router.get("/top", (req, res) => {
  res.send({ success: true, message: "ok" });
});

export default router;
