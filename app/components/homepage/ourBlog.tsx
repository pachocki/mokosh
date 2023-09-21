import BlogCard from "../ui/blogCard";
import Button from "../ui/button";

const blogData = [
  {
    index: "01",
    title: "WHAT ARE NATURAL BASE OILS AND HOW CAN THEY BE USED IN COSMETICS?",
    image: "/blog.png",
    date: "12.09.2023",
    category: "Products",
  },
  {
    index: "02",
    title: "PROBLEMATIC SKIN WITH ACNE? WILL LEMON GRASS ESSENTIAL OIL HELP",
    image: "/blog1.png",
    date: "12.09.2023",
    category: "Products",
  },
  {
    index: "03",
    title:
      "NATURAL COSMETICS FROM THE BRAND MOKOSH ARE THE KEY TO HEALTHY SKIN.",
    image: "/blog2.png",
    date: "12.09.2023",
    category: "Products",
  },
];

const OurBlog = () => {
  return (
    <section className="container mx-auto py-20 px-10 sm:px-2 sm:py-10">
      <div className="flex justify-between items-center pb-10">
        <div className="flex gap-4  text-7xl lg:text-4xl xs:text-3xl ">
          <span className="font-serif italic">Our</span>
          <span>BLOG</span>
        </div>
        <div>
          <Button label="more article" link="" underline />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 container mx-auto md:gap-2 sm:flex sm:flex-row sm:!overflow-x-auto">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.index}
            index={blog.index}
            title={blog.title}
            image={blog.image}
            date={blog.date}
            category={blog.category}
          />
        ))}
        ;
      </div>
    </section>
  );
};

export default OurBlog;
