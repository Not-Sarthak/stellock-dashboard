import { FloatingNav } from "@/components/landing/floating-navbar";
import MainContent from "@/components/landing/hero";
import Image from "next/image";
import hero from "@/public/landing/modal.png"
import Marquee from "react-fast-marquee";
import star from "@/public/landing/star.svg";
import FeatureSection from "@/components/landing/feature";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Demo", link: "/demo" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Docs", link: "/docs" },
  ];

    const repeatedText = "STELLOCK x STELLAR";

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
        <div>
          <FloatingNav navItems={navItems} />
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/2">
            {" "}
            <MainContent />
          </div>
          <div className="flex w-1/2 justify-center pt-40">
            <Image
              src={hero}
              alt="modal"
              className="animate-fadeInScaleUp rounded-xl border-[1px] border-black"
            />
          </div>
        </div>
        <div>
          <Marquee className="bg-black tracking-[3px] mt-20 text-[#ffffff]">
            {[...Array(20)].map((_, index) => (
              <div key={index}>
                <span className="">{repeatedText}</span>
                <Image
                  src={star}
                  alt="star"
                  className="mx-20 inline-block h-4 w-4"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="min-h-screen bg-white">
          <FeatureSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
