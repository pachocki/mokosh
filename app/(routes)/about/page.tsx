import getBillboard from "@/app/actions/getBilboard";
import Billboard from "@/app/components/billboards";
import Parallax from "@/app/components/parallax";

const page = async () => {
  const billboard = await getBillboard("b08690b8-b1da-4757-8770-9c61008a86bf");
  return (
    <div className="bg-stone-400  text-white">
      <div className=" container mx-auto  ">
        <div className="relative">
          <div>
            <h1 className="italic text-6xl absolute top-[5rem] z-10 px-5 md:text-5xl  sm:top-[5rem] xs:text-4xl  ">
              Beauty drawn from nature
            </h1>
          </div>
          <Billboard data={billboard} />
        </div>
        <div>
          <div className="pt-5 px-10 md:px-5">
            <h2 className="text-6xl italic font-serif lg:text-5xl md:!text-4xl ">About Us</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 pt-10 px-10 lg:pt-5 md:px-5 sm:flex sm:flex-col-reverse">
            <div className="">
              <p className="text-2xl text-white lg:text-lg ">
                Mokosh Cosmetics produces exceptional natural cosmetics that
                stand out in terms of quality, ingredient selection, texture,
                and fragrance. The formulations of Mokosh products are the
                result of collaborative efforts between technologists and
                cosmetologists, making them highly responsive to the real needs
                of customers. The company's name is derived from the Slavic
                goddess Mokosz, who represented the earth, moisture, fertility,
                and abundance in ancient beliefs. She cared for crops and women
                in those ancient traditions. Mokosh harnesses her gifts to
                create the formulations for their cosmetics. Only carefully
                selected, mostly organic ingredients with proven efficacy are
                used in their production. Leading professionals from
                professional SPAs in Poland and abroad have recognized the
                quality of Mokosh cosmetics and use them in their treatments and
                rituals. Both the media and individual customers have also
                recognized the uniqueness of Mokosh, as evidenced by numerous
                publications, nominations, and awards.
              </p>
            </div>
            <div>
              <img src="/blog2.png" className="h-full object-cover object-left md:object-[55%] " alt="team" />
            </div>
          </div>
          <div className="pt-28 px-10 md:px-5 sm:pt-10">
            <h2 className="text-6xl lg:text-5xl md:!text-4xl sm:!text-3xl">We work sustainably</h2>
            <h2 className="italic text-6xl lg:text-5xl md:!text-4xl sm:!text-3xl">in harmony with nature</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 pt-20 px-10 md:px-5 sm:grid-cols-1 sm:pt-5">
            <div>
              <img src="/mokosh_about2.png" alt="about" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-xl lg:text-lg sm:pb-5">
                At the core of our mission is a deep commitment to
                sustainability. We believe in working hand in hand with nature,
                striving for a harmonious coexistence that benefits both our
                planet and those who call it home. Through responsible practices
                and a dedication to preserving our natural resources, we aim to
                leave a lasting legacy of environmental stewardship. Our journey
                toward sustainability is not just a goal; it's a way of life
                that guides every step we take. Together, we can create a
                brighter, greener future for all.
              </p>
              <img
                src="/mokosh_about4.png"
                className="w-1/2 self-end sm:w-2/3"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Parallax backgroundImage="/paralax.png" extra=" h-full">
          <div className="container mx-auto flex justify-between gap-5 pt-20 px-10 lg:gap-2 md:px-5 sm:flex-col-reverse sm:pt-5">
            <div className="w-1/2 md:w-2/3 sm:!w-full">
              <h3 className="font-serif  text-5xl lg:text-4xl md:!text-3xl sm:pt-5">Family company.</h3>
              <p className="text-2xl pt-10 lg:text-lg md:pt-5  ">
                At Mokosh, we're more than just a business – we're a family. Our
                journey began with a shared vision and a passion for what we do.
                Over the years, our family has grown, both in terms of the
                generations involved and the loyal customers and partners who've
                become a part of our extended family. We believe that the warmth
                of a family touch can be felt in every aspect of our work. From
                the products and services we offer to the relationships we
                build, we bring a personal and caring approach to everything we
                do. Our values are rooted in trust, integrity, and a commitment
                to excellence. As a family company, we take pride in our
                heritage and the values that have been passed down through the
                years. We look forward to continuing our journey, serving our
                community, and welcoming new faces into our ever-expanding
                family. Thank you for being a part of our story and for allowing
                us to be a part of yours.
              </p>
            </div>
            <div>
              <img src="/about.png" alt="about" className="h-[60vh] self-end md:object-cover sm:w-full" />
            </div>
          </div>
          <div className=" flex justify-end  container mx-auto py-20 ">
              <span className="text-4xl w-1/2 font-serif italic lg:text-3xl px-10 lg:w-2/3 sm:!w-full sm:px-5 sm:!text-2xl">
                Natural beauty is our muse and our love. We're endlessly
                inspired by the elegance and grace of the natural world. 
              </span>
            </div>
        </Parallax>
      </div>
    </div>
  );
};

export default page;
