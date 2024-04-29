import Excel from "exceljs";
import { Product } from "../types";

export async function generateExcel(data: Product[]) {
  const workbook =
    new Excel.Workbook();
  const worksheet =
    workbook.addWorksheet("Products");

  // Sütun başlıklarını ekle
  worksheet.columns = [
    {
      header: "ID",
      key: "id",
      width: 10,
    },
    {
      header: "Name",
      key: "name",
      width: 40,
    },
    {
      header: "SKU",
      key: "sku",
      width: 15,
    },
    {
      header: "Price",
      key: "price",
      width: 15,
    },
  ];

  data.forEach((product) => {
    worksheet.addRow(product);
  });

  return await workbook.xlsx.writeBuffer();
}
