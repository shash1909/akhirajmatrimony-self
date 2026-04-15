import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Ravindra Palli",
    text: "Akhiraj Matrimony helped us find each other. The process was smooth, secure, and truly felt like family was guiding us.",
  },
  {
    name: "Anita & Vikram",
    location: "Munshipulia",
    text: "We are grateful for this platform. The profiles were genuine and the matchmaking was perfect. Highly recommended!",
  },
  {
    name: "Sneha & Arjun",
    location: "Sanjay Gandhi Puram",
    text: "A wonderful experience from registration to finding my life partner. Thank you Akhiraj Matrimony for this blessing!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-primary mb-4">
          Happy <span className="text-gradient-gold">Couples</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Real stories from real couples who found love through Akhiraj Matrimony
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
