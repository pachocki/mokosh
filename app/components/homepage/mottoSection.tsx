const MottoSection = () => {
  return (
    <section className="py-20 ">
      <div className="flex justify-between  container mx-auto relative px-5">
        <img
          src="/motto3.png"
          alt="beauty"
          className="w-[140px] h-[200px] object-cover  md:w-[110px] sm:h-[80px] self-end"
        />
        <img
          src="/motto4.png"
          alt="beauty"
          className="w-[200px]  object-cover md:w-[140px] "
        />
      </div>
      <div className="flex justify-center items-center text-center py-14 container mx-auto xl:py-10 ">
        <h2 className="text-4xl  font-serif  lg:text-3xl md:!text-xl px-5">
          We Believe in the power of both nature and science. <br />
          Based in Poland , we draw inspiration for our products from the <br/>{" "}
          natural beauty and simplicity of slavic lifestyle.
        </h2>
      </div>
      <div className="flex justify-around">
        <img
          src="/motto1.png"
          alt="beauty"
          className="w-[300px] h-[200px] object-cover md:w-[200px] md:h-[100px]"
        />
        <img
          src="/motto2.png"
          alt="beauty"
          className="w-[140px] h-[200px] object-cover"
        />
      </div>
    </section>
  );
};

export default MottoSection;
