import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantIntro from "@/components/RestaurantIntro";
import FeaturedBurgers from "@/components/FeaturedBurgers";
import About from "@/components/About";
import InteractiveMenu from "@/components/InteractiveMenu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import OrderSystem from "@/components/OrderSystem";
import Offers from "@/components/Offers";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <RestaurantIntro />
      <FeaturedBurgers />
      <About />
      <InteractiveMenu />
      <Gallery />
      <Reviews />
      <section id="book" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase mb-2">Reserve &amp; Order</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase">Make It Official</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <BookingForm />
          <OrderSystem />
        </div>
      </section>
      <Offers />
      <LocationContact />
      <Footer />
    </main>
  );
}
