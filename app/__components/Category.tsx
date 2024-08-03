import Image from "next/image";

const Category = () => {
  return (
    <div className="w-full min-h-[500px] py-[60px] flex justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-[30px] text-center font-medium">Vendor Category</h1>
        <p className="text-[20px]">
          Take your business to the next level by expanding with . Easy,
          accessible financing can help eligible merchants invest in new
          equipment, open a new location, hire more employees, and much more.
        </p>

        <div className="w-full mt-5 grid grid-cols-3 gap-[40px]">
          {Array.from({ length: 3 }).map((el: unknown, i: number) => (
            <div
              key={i}
              className="w-full col-span-3 lg:col-span-1 rounded-full items-center flex flex-col space-y-4"
            >
              <div className="size-[260px] bg-green-500 overflow-hidden  rounded-full">
                <Image
                  src={"/assets/dp.jpg"}
                  width={100}
                  unoptimized
                  height={100}
                  alt="dp"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="px-8 py-2 text-white text-[16px] bg-gray-800">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
