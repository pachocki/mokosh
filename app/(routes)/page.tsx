import getBillboard from "../actions/getBilboard";
import getProducts from "../actions/getProducts";
import CharitySection from "../components/homepage/charitySection";
import HeroSection from "../components/homepage/heroSection";
import MottoSection from "../components/homepage/mottoSection";
import OurBlog from "../components/homepage/ourBlog";
import OurGoals from "../components/homepage/ourGoalsSection";
import OurValues from "../components/homepage/ourValuesSection";
import ProductList from "../components/ui/productList";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("f811c871-0ab8-4094-817d-81501d35b91f");
  const products = await getProducts({ isFeatured: true });
  const description =
    "Let it manifest in our daily actions, caring for our skin, fitness, and well-being. Let's make time for ourselves.";

  return (
    <div>
      <HeroSection data={billboard} />
      <MottoSection />
      <ProductList
        title="Our Products"
        description={description}
        items={products}
        button
      />
      <OurGoals />
      <OurValues />
      <CharitySection />
      <OurBlog />
    </div>
  );
};

export default HomePage;
