export interface Product {
  id: number;
  price: number;
  sku: string;
  name: string;
  originalImage: {
    url: string;
    width: number;
    height: number;
  };
}
