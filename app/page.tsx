import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatButton from '@/components/ChatButton';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <ChatButton />
    </main>
  );
}
