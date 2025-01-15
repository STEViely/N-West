import Image from "next/image";
import nwestlogo from "@/public/nwestlogo.png";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="flex justify-around items-start gap-10 mx-auto my-16 text-white">
        <Image
          src={nwestlogo}
          alt="footerLogo"
          width={102.54}
          height={102.54}
        />
        <hr className="ml-2 border-[1px] h-[104.51px]" />
        <div className="w-[30%]">
          <h1>About Us</h1>
          <p className=" font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            similique molestias recusandae totam debitis beatae veniam, nam
          </p>
        </div>

        <div className="w-[20%]">
          <h1>Service</h1>
          <Link href="products" className="font-thin">
            Mirror
          </Link>
        </div>
        <div className="w-[20%]">
          <h1>Contact Us</h1>
          <div className="flex gap-6">
            <a
              href="https://lin.ee/SFZ0yDB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image src="/Line.png" alt="line" width={19} height={18} />
              </button>
            </a>
            <a
              href="http://m.me/nwest4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image src="/Chat.png" alt="chat" width={18} height={18} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
