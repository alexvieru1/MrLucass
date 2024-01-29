import About from "@/components/About";
import Apartments from "@/components/Apartments";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
      <NavBar />
      <div className="container mt-[80px]">
        <Hero />
        <About />
        <Gallery />
        <Apartments />
        <Contact />
      </div>
    </main>
  );
}
