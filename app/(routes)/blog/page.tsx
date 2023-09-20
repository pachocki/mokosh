import BlogCard from "@/app/components/ui/blogCard";
import Button from "@/app/components/ui/button";

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
  {
    index: "04",
    title: "THE BENEFITS OF COCONUT OIL FOR SKIN AND HAIR",
    image: "/blog3.png",
    date: "12.09.2023",
    category: "Products",
  },
  {
    index: "05",
    title: "DIY FACE MASKS WITH NATURAL INGREDIENTS FOR GLOWING SKIN",
    image: "/blog4.png",
    date: "12.09.2023",
    category: "Skincare",
  },
  {
    index: "06",
    title: "TOP 5 ESSENTIAL OILS FOR RELAXATION AND STRESS RELIEF",
    image: "/blog5.jpg",
    date: "12.09.2023",
    category: "Wellness",
  },
  {
    index: "07",
    title: "HOW TO CHOOSE THE RIGHT SHAMPOO FOR YOUR HAIR TYPE",
    image: "/blog6.jpg",
    date: "12.09.2023",
    category: "Haircare",
  },
  {
    index: "08",
    title: "THE ART OF HAIR CARE: TIPS FOR SOFT AND HEALTHY HAIR",
    image: "/blog7.png",
    date: "12.09.2023",
    category: "Skincare",
  },
  {
    index: "09",
    title: "NATURAL INGREDIENTS FOR BODY LOTIONS THAT NOURISH YOUR SKIN",
    image: "/blog8.png",
    date: "12.09.2023",
    category: "Skincare",
  },
  {
    index: "10",
    title: "TIPS FOR HEALTHY HAIR: A GUIDE TO STRONG AND SHINY LOCKS",
    image: "/blog9.png",
    date: "12.09.2023",
    category: "Skincare",
  },
  {
    index: "11",
    title: "ALL ABOUT SUNSCREEN: HOW TO PROTECT YOUR SKIN FROM UV RAYS",
    image: "/blog10.png",
    date: "12.09.2023",
    category: "Haircare",
  },
];

const Blog = () => {
  return (
    <div className="bg-stone-400 ">
      <div className="container mx-auto py-32 px-10 sm:px-2 ">
        <div className="flex justify-between items-center text-white">
          <div className="flex gap-4 text-7xl lg:text-4xl xs:text-3xl">
            <span className="font-serif italic ">Our</span>
            <span>BLOG</span>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="grid grid-cols-3 gap-5  py-20 md:gap-2 lg:py-10  lg:gap-2 sm:flex sm:flex-col sm:items-center sm:px-0">
            {blogData.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.index}
                index={blog.index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                category={blog.category}
                blog
              />
            ))}
            ;
          </div>
          <div className="pb-20 px-2 sm:pb-0 sm:px-0">
            {blogData.slice(4, 5).map((blog) => (
              <div className="w-full" key={blog.index}>
                <BlogCard
                  
                  index={blog.index}
                  title={blog.title}
                  image={blog.image}
                  date={blog.date}
                  category={blog.category}
                  horizontal
                  
                />
              </div>
            ))}
            ;
          </div>
          <div className="flex justify-between gap-2 pb-20 sm:flex-col sm:[&>*:first-child]:self-end sm:pb-0 ">
            {blogData.slice(6, 8).map((blog) => (
              <div className="w-full sm:w-auto " key={blog.index}>
                <BlogCard
                  
                  index={blog.index}
                  title={blog.title}
                  image={blog.image}
                  date={blog.date}
                  category={blog.category}
                  blog
                />
              </div>
            ))}
            ;
          </div>
          <div className="grid grid-cols-3 gap-5 lg:gap-2 pt-10 md:gap-2 sm:flex sm:flex-col items-center">
            {blogData.slice(8, 11).map((blog) => (
              <BlogCard
                key={blog.index}
                index={blog.index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                category={blog.category}
                blog
              />
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
