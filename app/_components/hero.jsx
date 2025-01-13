export default function Hero() {
  return (
    <div className="mt-10 flex justify-around bg-black text-white w-[954px] h-[391px] mx-auto">
      <div className="flex flex-col justify-center">
        <div>
          <p className=" font-thin text-balance">We are Giving you The Best</p>
        </div>
        <div>
          <h1 className="text-[50px]">CAR PRODUCT</h1>
        </div>
        <div>
          <p>The Best Part Can Be Found Here</p>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="border-white border px-2 py-1">
            OUR PRODUCTS
          </button>
          <button className="border-white border px-2 py-1">CONTACT US</button>
        </div>
      </div>
      <div className="flex flex-col justify-center"> HERO IMG</div>
    </div>
  );
}
