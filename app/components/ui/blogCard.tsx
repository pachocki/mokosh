import Button from "./button";

interface BlogCardProps{
    image:string;
    title:string;
    index:string;
    date:string;
    category:string;
    horizontal?:boolean;
    blog?:boolean;

}

const BlogCard:React.FC<BlogCardProps> = ({image,title,index,date,category,horizontal,blog}) => {
    return (
        <div className={`cursor  ${horizontal?"w-full" :"max-w-[500px]"}`}>
            <span className="font-bold">{index}</span>
            <div className={`flex  gap-3 bg-white  ${blog?"sm:w-full" :"sm:w-[300px]"} ${horizontal?"flex-row items-center sm:w-full sm:flex-col" :"flex-col"}`}>
                <div className="overflow-hidden">
                <img src={image} alt="image" className="h-[400px] object-cover transition-all hover:scale-110"/>
                </div>
                <div className="px-3 h-[195px] w-full">
                <div>
                <h5 className="font-serif font-bold text-xl lg:text-sm ">{title}</h5>
                <p className="text-lg lg:text-sm">{date} | {category}</p>
               </div>
                <div className="py-5 ">
                    <Button small label="read more" link="" underline />
                </div>
            </div>
            </div>
        </div>
    );
}

export default BlogCard;