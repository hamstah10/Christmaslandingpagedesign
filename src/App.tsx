import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Preview } from "./components/Preview";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Snowflakes } from "./components/Snowflakes";
import { ChristmasDecorations } from "./components/ChristmasDecorations";

export default function App() {
  return (
    <div className="min-h-screen">
      <Snowflakes />
      <ChristmasDecorations />
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="preview">
          <Preview />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
