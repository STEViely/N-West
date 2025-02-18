import { ibmThai } from "./_ui/font";
import Header from "./_components/header";
import "@/app/globals.css";
import Footer from "./_components/footer";

export const metadata = {
  title: {
    template: "N-WEST | %s",
    default: "N-WEST",
  },
  description:
    "กระจกรถยนต์คุณภาพสูง, ของเเต่งรถยนต์, กระจกรถยนต์, รถนต์, กระจกตัดเเสง, กระจกรถยนต์เลนส์ไวด์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="bg-black">
      <body className={ibmThai.className}>
        <Header />
        <div className="flex flex-col mx-8 lg:mx-[220px] min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
