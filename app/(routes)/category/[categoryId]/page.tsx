export const revalidate = 0;
import getCategories from "@/app/actions/getCategories";
import getCategory from "@/app/actions/getCategory";
import getProducts from "@/app/actions/getProducts";
import getSizes from "@/app/actions/getSizes";
import NoResults from "@/app/components/NoResults";
import Billboard from "@/app/components/billboards";
import CategoriesMenu from "@/app/components/ui/categoriesMenu";
import Filter from "@/app/components/ui/filter";
import ProductCards from "@/app/components/ui/productCards";
interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const categories = await getCategories();
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  return (
    <div className="  bg-stone-400">
      <div className="container mx-auto">
        <Billboard data={category.billboard} />
        <div className="grid grid-cols-[0.2fr_2fr] gap-5 pb-20 md:gap-2 sm:grid-cols-1 sm:gap-0">
          <div className="flex flex-col gap-2">
            <CategoriesMenu data={categories} column />
            <Filter valueKey="sizeId" name="Sizes" data={sizes}  />
          </div>

          <div>
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 pr-10 lg:pr-2 md:px-2  sm:!grid-cols-1">
              {products.map((item) => (
                <ProductCards key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
