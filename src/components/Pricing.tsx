import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfekt für kleine Websites",
      features: [
        "24 Adventskalender-Türchen",
        "Standard-Design-Vorlagen",
        "Responsive für alle Geräte",
        "Backend-Integration",
        "E-Mail Support",
        "1 Jahr Updates"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "99",
      description: "Für anspruchsvolle Projekte",
      features: [
        "Alles aus Starter",
        "Unbegrenzte Anpassungen",
        "Premium-Design-Vorlagen",
        "E-Mail Benachrichtigungen",
        "Prioritäts-Support",
        "Lebenslange Updates",
        "Mehrere Kalender",
        "Custom Branding"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Individuell",
      description: "Maßgeschneiderte Lösungen",
      features: [
        "Alles aus Professional",
        "Dedizierter Support",
        "Custom Development",
        "SLA-Garantie",
        "Training & Onboarding",
        "Multi-Site Lizenz"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Wählen Sie Ihr Paket
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible Preisoptionen für jede Unternehmensgröße
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-red-600 to-red-700 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-red-900 px-4 py-1 rounded-full">
                  Beliebteste Wahl
                </div>
              )}
              
              <h3 className={`mb-2 ${plan.highlighted ? 'text-white' : ''}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                {plan.price === "Individuell" ? (
                  <div className={plan.highlighted ? 'text-white' : 'text-gray-900'}>
                    {plan.price}
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-900'}>
                      €{plan.price}
                    </span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                      einmalig
                    </span>
                  </div>
                )}
              </div>
              
              <Button 
                className={`w-full mb-8 ${
                  plan.highlighted 
                    ? 'bg-white text-red-600 hover:bg-gray-100' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {plan.price === "Individuell" ? "Kontakt aufnehmen" : "Jetzt kaufen"}
              </Button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-yellow-300' : 'text-green-600'
                    }`} />
                    <span className={plan.highlighted ? 'text-red-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
