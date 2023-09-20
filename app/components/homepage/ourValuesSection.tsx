const OurValues = () => {
  return (
    <section className="mx-auto container py-20 px-10 sm:px-2">
      <div className="flex justify-between sm:justify-center">
        <div className="flex flex-col gap-2 text-6xl font-medium lg:text-4xl  items-center ">
          <span>Mokosh is 100% </span>
          <span>Efficacy in</span>
          <span>Every Product</span>
        </div>
        <div>
          <img src="/motto3.png" className="w-[300px] h-auto lg:w-[200px] sm:hidden" alt="image" />
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] pt-10 lg:grid-cols-2 md:!grid-cols-[0.8fr_1fr] md:gap-5 sm:flex sm:flex-col">
        <div><img src="mokosz.png" className="w-[300px] h-auto md:w-full" /></div>
        <div className="flex flex-col gap-5 text-3xl lg:text-2xl md:!text-xl">
          <p>
            At Mokosh Cosmetics, we specialize in crafting exceptional natural
            skincare products that captivate with their quality and ingredient
            selection. Our journey is one of dedication to purity, a commitment
            to harnessing the power of nature, and an unwavering belief in the
            beauty of simplicity.
          </p>
          <p>
            Our name, 'Mokosh,' pays homage to the ancient Slavic goddess of the
            earth and moisture. It is from her that we draw inspiration and the
            wisdom that has accompanied our ancestors for centuries. Just as
            Mokosh cared for the earth and its bounties, we too nurture the
            essence of nature and purity in our products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
