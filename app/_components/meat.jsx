import sunset from "@/public/sunset.jpg";
import rare from "@/public/rare.png";
import Image from "next/image";

export default function Meat() {
  return (
    <div>
      <div className="flex w-full mx-auto mt-4 text-white justify-between  ">
        <div className="w-[50%]">
          <Image src={sunset} alt="sunset" width={150} />
        </div>
        <div className="w-[50%] ">
          <p className="text-[12px] font-light text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            provident saepe porro distinctio placeat pariatur magni ut suscipit
            voluptas. Laborum impedit perferendis molestiae vero quos quae quas
            perspiciatis nemo, repudiandae quidem. Dolor tenetur rem nobis,
          </p>
        </div>
      </div>
      <div className="flex w-full mt-4 text-white">
        <div className="flex flex-col w-[50%] gap-2">
          <h1 className="mt-2">WHERE DOES IT COME FROM?</h1>
          <p className="text-[12px] font-light ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            ratione placeat vero deserunt minus quibusdam necessitatibus, a eum
            sunt beatae molestiae voluptate quasi eius nisi nam, ipsam accusamus
            laboriosam voluptates dolorem in ut nobis eos. Minus ut quidem eius
            neque veniam odio blanditiis possimus! Blanditiis nostrum obcaecati
            neque veniam odio blanditiis possimus! Blanditiis nostrum obcaecati
          </p>
        </div>
        <div className=" w-[50%]">
          <Image
            src={rare}
            alt="rare"
            width={0}
            height={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
