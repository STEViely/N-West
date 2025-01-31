import Image from "next/image";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";
import pageCover from "@/public/pageCover.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black pt-10 flex flex-col items-center pb-10">
      <h1 className="font-bold mt-8 text-[22px] text-white px-4 md:text-[30px] lg:text-[40px] text-center">
        "N-WEST: เติมเต็มทุกสไตล์ เพิ่มคุณภาพความปลอดภัย"
        <br />
        ให้การขับขี่ของคุณ
      </h1>
      <div className="mt-4 p-4">
        <p className="text-center md:text-[22px] text-white">
          ที่ N-WEST เราไม่เพียงแค่ขายอุปกรณ์แต่งรถ
          แต่เราคือพันธมิตรสำหรับคนรักรถทุกคน!
          เราเชื่อว่ารถของคุณคือสไตล์ที่สะท้อนตัวตนของคุณ
          เราจึงคัดสรรอุปกรณ์แต่งรถคุณภาพสูง ไม่ว่าจะเป็นกระจกมองข้างดีไซน์เท่
          ไฟเลี้ยวล้ำสมัย หรืออุปกรณ์เสริมที่ทำให้รถของคุณโดดเด่น ในทุกเส้นทาง
          ด้วยประสบการณ์ในวงการแต่งรถและความใส่ใจในทุกรายละเอียด
          เรามุ่งมั่นที่จะมอบสินค้าคุณภาพและบริการที่ดีที่สุดให้คุณ
          <br />
          <br />
          เพราะสำหรับเรา รถของคุณไม่ได้เป็นแค่พาหนะ
          แต่คือความภูมิใจที่ต้องการการดูแลพิเศษ เลือก N-WEST
          แล้วให้เราช่วยเปลี่ยนรถของคุณให้เป็นมากกว่าคำว่า
        </p>
        <h1>"สมบูรณ์แบบ"</h1>
      </div>
      <div className="p-4 gap-4 flex flex-col text-white">
        <p className="text-center text-white md:text-[18px]">
          เยี่ยมชม facebook ของเราที่&nbsp;
          <Link
            href="https://www.facebook.com/nwest4"
            target="_blank"
            className="underline font-bold text-blue-800 cursor-pointer"
          >
            N_WEST
          </Link>
        </p>
        <Link href="https://www.facebook.com/nwest4" target="_blank">
          <Image
            src={pageCover}
            alt="facebook"
            width={300}
            className="w-[300px] md:w-[600px] xl:w-[1000px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-4 gap-2 text-white">
        <h1 className="underline md:text-[18px]">สอบถามเพิ่มเติม</h1>
        <div className="flex justify-center gap-6 md:gap-8 lg:gap-12">
          <a
            href="https://lin.ee/MsoarOB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[36px] h-[36px] md:w-[50px] lg:w-[80px] lg:h-[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
              <Image src={Line} alt="line" cover="true" />
            </button>
          </a>
          <a
            href="https://m.me/ggdesignlogo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[36px] h-[36px] md:w-[50px] lg:w-[82px] lg-h0[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
              <Image src={Chat} alt="chat" cover="true" />
            </button>
          </a>
        </div>
      </div>
      <p className="mt-10 md:mt-20 text-[16px] md:text-[18px]">
        &quot;หวังเป็นอย่างยิ่งที่จะได้ร่วมงานกับคุณ&quot;
      </p>
    </div>
  );
}
