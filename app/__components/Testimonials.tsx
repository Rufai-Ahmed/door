import Slide from "./Slider";

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[800px] py-9 md:py-0 bg-gray-100">
      <div className="container mx-auto px-4 py-4 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
        <div className="w-full flex items-center justify-center">
          <h5 className="uppercase text-[16px] font-bold flex items-center">
            <div className="md:w-[60px] w-[60px] mr-1 h-[1px] bg-black" />
            How it works
            <div className="md:w-[60px] w-[60px] ml-1 h-[1px] bg-black" />
          </h5>
        </div>

        <center className="mt-5">
          <h3 className="text-[40px] leading-tight font-bold">
            Trusted by thousand of <br /> people & companies.
          </h3>
        </center>

        <div className="flex items-center justify-center mt-10">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
