import ProductDetails from "./productDetails";

async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch {
    return [];
  }
}

async function getSingleProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductDetailsPage({ params }) {
  if (!params || !params.id) {
    return <div className="p-8 text-center text-red-500 font-medium">Product ID is missing.</div>;
  }

  const product = await getSingleProduct(params.id);

  if (!product) {
    return <div className="p-8 text-center text-gray-600">Product not found or failed to load.</div>;
  }

  return (
    <section className="p-6">
      <ProductDetails product={product} />
      
    </section>
  );
}
