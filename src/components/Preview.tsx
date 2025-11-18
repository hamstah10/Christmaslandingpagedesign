import previewImage from "figma:asset/a9f0b9f70a22783c387403085a8f79dfe1edd6ea.png";

export function Preview() {
  return (
    <section className="py-24 bg-gradient-to-b from-red-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Sehen Sie es in Aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ein wunderschön gestalteter Adventskalender, der Ihre Besucher durch die Weihnachtszeit begleitet
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-4 ring-red-200">
            <img 
              src={previewImage} 
              alt="TYPO3 Adventskalender Preview" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="text-4xl mb-2">✨</div>
              <h4 className="mb-2">Festliches Design</h4>
              <p className="text-gray-600">Wunderschöne winterliche Atmosphäre mit Bergen und Schnee</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-2">🔒</div>
              <h4 className="mb-2">Gesperrte Türchen</h4>
              <p className="text-gray-600">Zukünftige Tage bleiben verschlossen bis zum richtigen Datum</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-2">🎁</div>
              <h4 className="mb-2">Interaktiv</h4>
              <p className="text-gray-600">Animationen und Überraschungen hinter jedem Türchen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
