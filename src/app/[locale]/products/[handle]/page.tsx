import { notFound } from "next/navigation";
import { getProductByHandle, getAllProducts } from "@/lib/shopify";
import ProductDetail from "@/components/ProductDetail";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { handle } = await params;
    const product = await getProductByHandle(handle);
    if (!product) return { title: "Produit introuvable" };

    return {
      title: `${product.title} | DeepWaveBraids`,
      description: product.description?.slice(0, 160),
      openGraph: {
        title: product.title,
        description: product.description?.slice(0, 160),
        images: product.images.edges[0]
          ? [{ url: product.images.edges[0].node.url }]
          : undefined,
      },
    };
  } catch {
    return { title: "Produit | DeepWaveBraids" };
  }
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((product) => ({
      handle: product.handle,
    }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: Props) {
  try {
    const { handle } = await params;
    const product = await getProductByHandle(handle);

    if (!product) {
      notFound();
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <ProductDetail product={product} />
      </div>
    );
  } catch {
    notFound();
  }
}
