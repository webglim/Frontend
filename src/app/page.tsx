import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Announcement />
      <Footer />
    </div>
  );
}
