import ProductDetailsPage from "@/app/Components/ProductDetailsPage";
import { notFound } from "next/navigation";

// async function ProductsDetail({ params }: { params: Promise<{ id: string }> }) {

export interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  tags: string[];
  brand: string;
  images: string[];
  thumbnail: string;
  category: string;
  stock: number;
}

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  console.log(response);

  if (!response.ok) {
    notFound();
  }
  const data = (await response.json()) as ProductDetailsProps;

  return <ProductDetailsPage data={data} id={Number(id)} />;
}

export default ProductDetails;
