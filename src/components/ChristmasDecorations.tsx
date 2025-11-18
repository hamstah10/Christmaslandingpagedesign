import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ChristmasDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Geschenke oben links */}
      <div className="absolute top-40 left-20 opacity-40 animate-pulse" style={{animationDuration: '3s'}}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1574758189742-a95aeb4fb327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBnaWZ0JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MzUwMTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Christmas gifts"
          className="w-24 h-24 object-cover rounded-lg rotate-12"
        />
      </div>
      
      {/* Ornamente oben rechts */}
      <div className="absolute top-60 right-32 opacity-40 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1763463608784-e0b392f9475a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBvcm5hbWVudCUyMHJlZCUyMGdvbGR8ZW58MXx8fHwxNzYzNTAxNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Christmas ornaments"
          className="w-20 h-20 object-cover rounded-full -rotate-12"
        />
      </div>
      
      {/* Sterne */}
      <div className="absolute top-32 right-1/4 text-yellow-400 text-4xl opacity-60 animate-pulse" style={{animationDuration: '2s'}}>
        ⭐
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-yellow-300 text-3xl opacity-50 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
        ✨
      </div>
      
      {/* Zusätzliche Weihnachts-Emojis */}
      <div className="absolute top-1/2 right-10 text-red-500 text-3xl opacity-30 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}>
        🎁
      </div>
      <div className="absolute bottom-1/4 left-10 text-green-500 text-3xl opacity-30 animate-pulse" style={{animationDuration: '3s', animationDelay: '2s'}}>
        🎄
      </div>
    </div>
  );
}
