import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, PackageCheck, Globe2 } from "lucide-react";
import HeroSectionVideo from "@/assets/4499159-uhd_2560_1440_30fps.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay - Lazy loaded */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={HeroSectionVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-gradient opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-white/10 backdrop-blur border border-white/20 animate-bounce-in">
            <Globe2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-float" />
            <span className="text-xs sm:text-sm font-medium">
              UK-Based Global Import & Export Firm
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-200">
            Gateways Global Ltd
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent animate-pulse-glow">
              Trading Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 animate-slide-in-left animate-delay-400">
            Gateways Global Ltd - founded with excellence in mind, we are a leading UK-based import
            & export firm specializing in global trade. We meet customers'
            ever-changing needs through dependable service and continual
            expansion of product lines across diverse industries.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 animate-fade-in-up animate-delay-800">
            <div className="text-center space-y-2 hover-lift">
              <div className="flex justify-center">
                <Globe2 className="h-8 w-8 text-secondary animate-bounce-in animate-delay-900" />
              </div>
              <div className="text-3xl font-bold animate-scale-in animate-delay-1000">
                12+
              </div>
              <div className="text-gray-300">Countries Served</div>
            </div>

            <div className="text-center space-y-2 hover-lift">
              <div className="flex justify-center">
                <Ship className="h-8 w-8 text-secondary animate-bounce-in animate-delay-1000" />
              </div>
              <div className="text-3xl font-bold animate-scale-in animate-delay-1100">
                Global
              </div>
              <div className="text-gray-300">Shipping Network</div>
            </div>

            <div className="text-center space-y-2 hover-lift">
              <div className="flex justify-center">
                <PackageCheck className="h-8 w-8 text-secondary animate-bounce-in animate-delay-1100" />
              </div>
              <div className="text-3xl font-bold animate-scale-in animate-delay-1200">
                9+
              </div>
              <div className="text-gray-300">Product Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
