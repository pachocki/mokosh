import getProductById from "@/app/actions/getProduct";
import getProducts from "@/app/actions/getProducts";
import Info from "@/app/components/info";
import Gallery from "@/app/components/ui/gallery/gallery";
import ProductList from "@/app/components/ui/productList";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const description = "Here you wil find the best products for you.";

  const product = await getProductById(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className=" bg-gray-400 pt-32 sm:pt-20 ">
      <div className="grid grid-cols-[1fr_2fr] gap-5 pb-10  container mx-auto px-10  sm:px-2  lg:grid-cols-1">
        <div>
          <Gallery images={product?.images} />
        </div>
        <div>
          <Info data={product} />
        </div>
      </div>
      <div className="bg-black">
        <ProductList
          title="Related items"
          items={suggestedProducts}
          white
          description={description}
        />
      </div>
    </div>
  );
};

export default ProductPage;
