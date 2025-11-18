import { Button } from "./ui/button";
import { Gift, Calendar, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-red-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      {/* Dekorativer Weihnachtsmann links */}
      <div className="absolute left-0 bottom-20 hidden lg:block z-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1751574978934-6e9b1f3743c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50YSUyMGNsYXVzJTIwaWxsdXN0cmF0aW9uJTIwY2FydG9vbnxlbnwxfHx8fDE3NjM1MDE1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Weihnachtsmann"
          className="w-64 h-auto opacity-90 transform -rotate-6"
        />
      </div>
      
      {/* Leuchtender Tannenbaum rechts */}
      <div className="absolute right-0 bottom-20 hidden lg:block z-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1610088439413-4a967ce0a4d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjB0cmVlJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MzUwMTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Leuchtender Weihnachtsbaum"
          className="w-64 h-auto opacity-90 transform rotate-6"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white">TYPO3 Extension für die Adventszeit</span>
          </div>
          
          <h1 className="text-white mb-6">
            Adventskalender 2025
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-300 bg-clip-text text-transparent">
              Für Ihre TYPO3 Website
            </span>
          </h1>
          
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Öffne jeden Tag ein neues Türchen und entdecke tolle Überraschungen! 
            Die perfekte Extension für die festliche Jahreszeit auf Ihrer TYPO3-Website.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">
              <Gift className="mr-2 h-5 w-5" />
              Jetzt Extension holen
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Live Demo ansehen
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-2">🎄</div>
              <div className="text-white">24 Türchen</div>
              <p className="text-red-200 text-sm mt-1">Jeden Tag eine Überraschung</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="text-white">Einfache Integration</div>
              <p className="text-red-200 text-sm mt-1">Plug & Play für TYPO3</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-white">Anpassbar</div>
              <p className="text-red-200 text-sm mt-1">Individuelle Gestaltung</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
