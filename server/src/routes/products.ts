import {
  Router,
  Request,
} from "express";
import {
  getProductsWithId,
  getRecentlyUpdatedProducts,
} from "../utils/api";
import { generateExcel } from "../utils/helper-functions";

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

router.post(
  "/export",
  async (req: Request, res) => {
    const { ids } = req.body;

    try {
      const data = await getProductsWithId(ids);
      const excelBuffer =
        await generateExcel(data.items);
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=products.xlsx"
      );
      res.status(200).send(excelBuffer);
    } catch (err) {
      res
        .status(500)
        .send("Internal Server Error");
    }
  }
);

export default router;
