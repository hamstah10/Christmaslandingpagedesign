import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white">
              🎄
            </div>
            <span className="text-gray-900">TYPO3 Adventskalender</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Features</a>
            <a href="#preview" className="text-gray-700 hover:text-red-600 transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-700 hover:text-red-600 transition-colors">Preise</a>
            <a href="#support" className="text-gray-700 hover:text-red-600 transition-colors">Support</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Anmelden
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Jetzt starten
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
