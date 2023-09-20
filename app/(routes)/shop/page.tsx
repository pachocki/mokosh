


import getBillboard from "@/app/actions/getBilboard";
import getCategories from "@/app/actions/getCategories";
import getProducts from "@/app/actions/getProducts";
import Billboard from "@/app/components/billboards";
import CategoriesMenu from "@/app/components/ui/categoriesMenu";
import ProductCards from "@/app/components/ui/productCards";



const ShopPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  const billboard = await getBillboard("228f6ccb-0d5c-4114-83d9-6b23ba1329e4");
  return (
    <div className="bg-gray-400">
        <Billboard data={billboard}/>
        <CategoriesMenu data={categories} />
      <div className=" grid grid-cols-4 gap-5  pt-10 pb-20 container mx-auto px-10 sm:px-2 lg:gap-2 lg:grid-cols-3 sm:!grid-cols-1">
        {products?.map((item) => (
            <div key={item.id}>
          <ProductCards data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
