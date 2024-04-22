import {
  Router,
  Request,
} from "express";
import { getRecentlyUpdatedProducts } from "../utils/api";

const router = Router();

router.get("/", (req: Request, res) => {
  const { count } = req.params;

  getRecentlyUpdatedProducts(count)
    .then((data) =>
      res.status(200).send(data)
    )
    .catch((err) =>
      res.status(500).send(err)
    );
});

export default router;
