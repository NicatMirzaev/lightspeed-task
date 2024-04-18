import {
  Router,
  Request,
} from "express";
import { getRecentlyUpdatedProducts } from "../utils/api";
import { Product } from "../types";

const router = Router();

router.get("/", (req: Request, res) => {
  const { count } = req.params;

  getRecentlyUpdatedProducts(count)
    .then(
      (data: {
        count: number;
        items: Product[];
      }) => res.status(200).send(data)
    )
    .catch((err: Error) =>
      res.status(500).send(err)
    );
});

export default router;
