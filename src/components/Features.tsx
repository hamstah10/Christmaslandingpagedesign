import { Lock, Unlock, Bell, Settings, Image, Code } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Automatische Freigabe",
      description: "Türchen öffnen sich automatisch am jeweiligen Tag. Volle Kontrolle über den Zeitplan."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Multimedia-Inhalte",
      description: "Bilder, Videos, Texte oder Links hinter jedem Türchen. Ihrer Kreativität sind keine Grenzen gesetzt."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Backend-Integration",
      description: "Einfache Verwaltung über das TYPO3-Backend. Intuitive Benutzeroberfläche für schnelle Einrichtung."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Perfekte Darstellung auf allen Geräten - Desktop, Tablet und Mobile."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Benachrichtigungen",
      description: "Optional: E-Mail-Benachrichtigungen für neue Türchen und Updates."
    },
    {
      icon: <Unlock className="w-8 h-8" />,
      title: "Flexible Konfiguration",
      description: "Passen Sie Farben, Layouts und Animationen an Ihr Corporate Design an."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Leistungsstarke Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alles was Sie brauchen, um Ihre Besucher in der Adventszeit zu begeistern
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-red-500 transition-all duration-300 hover:shadow-xl bg-white"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
