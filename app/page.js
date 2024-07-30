import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen mx-auto bgImage">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
