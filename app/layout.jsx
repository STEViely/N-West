import { Mure } from "./_ui/font";
import Header from "./_components/header";
import "@/app/globals.css";
import SubNavBar from "./_components/subNavBar";
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
    <html lang="En" className="bg-black">
      <body className={Mure.className}>
        <div className=" flex flex-col ">
          <Header />
          <SubNavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
