
import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = async ({ data }) => {
  const words = data?.label?.split(" ");
  const firstParagraph = words?.slice(0, 1).join(" ");
  const secondParagraph = words?.slice(1, 2).join(" ");
  const thirdParagraph = words?.slice(2, 4).join(" ");

  return (
    <div className="pt-28 pb-10 container mx-auto  overflow-hidden relative sm:pt-20 sm:pb-5">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="  relative w-full h-[50vh] aspect-square overflow-hidden bg-cover bg-no-repeat bg-center object-fit"
      ></div>
    </div>
  );
};

export default Billboard;
