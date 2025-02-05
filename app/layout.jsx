import { Mure } from "./_ui/font"; // ตรวจสอบว่า Mure ถูกนิยามไว้ในไฟล์นี้แล้ว
import Header from "./_components/header";
import "@/app/globals.css";
import Footer from "./_components/footer";

export const metadata = {
  title: {
    template: "N-WEST | %s",
    default: "N-WEST",
  },
  description:
    "รับออกเเบบโลโก้, รับออกเเบบเว็บไซต์, รับสร้างเว็บไซต์, logo design, website design, web building, รับทำเว็บไซต์, ทำโลโก้, ทำLogo, รับทำเว็บไซต์, รับเขียนwebsite, ออกแบบ, gg design, GG Design, ราคาประหยัด",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={Mure.className}>
        <Header />
        <div className="flex flex-col mx-10 min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
