import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/rounded-card.scss";
import "./css/globals.scss";
import "./css/lighter.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { Toast } from "./components/helper/toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Pham Tien Dat",
  description:
    "This is the portfolio of Pham Tien Dat. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden white-scrollbar">
      <body className={inter.className}>
        <Toast />
        <main className="min-h-screen relative mx-auto px-12 text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
