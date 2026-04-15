import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Wedding decoration"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <img
          src={logo}
          alt="Akhiraj Matrimony"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 object-contain rounded-full bg-background/90 p-3"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-cream mb-4 leading-tight">
          Find Your Perfect Life Partner
        </h1>
        <p className="text-lg sm:text-xl text-gold-light font-light mb-2 italic font-heading">
          with Akhiraj Matrimony
        </p>
        <p className="text-cream-dark/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Trusted Partnerships, Joyful Unions — Where traditions meet modern matchmaking
        </p>
        <button
          onClick={onRegisterClick}
          className="bg-gradient-gold text-primary font-semibold px-10 py-4 rounded-full text-lg tracking-wide
                     hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out
                     shadow-lg shadow-gold-dark/30"
        >
          Register Now
        </button>
      </div>
      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-background">
          <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,50.7L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
