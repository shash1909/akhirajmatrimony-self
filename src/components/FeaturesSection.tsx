import { Shield, Heart, UserCheck, Lock } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Verified Profiles",
    description: "Every profile is carefully verified to ensure genuine and trustworthy matches.",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your personal information is secure with our advanced privacy controls.",
  },
  {
    icon: Heart,
    title: "Smart Matchmaking",
    description: "Our intelligent system finds the most compatible partners based on your preferences.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "We prioritize your safety with secure communication and data protection.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-primary mb-4">
          Why Choose <span className="text-gradient-gold">Akhiraj Matrimony</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          We bring together tradition and technology to help you find your perfect match
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-8 text-center border border-border
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-gold flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
