import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Truck, Ship, Plane, Globe, Package, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const AboutUs = () => (
  <div className="min-h-screen">
    <Header />

    {/* Import/Export Hero Section */}
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animate-delay-200">
            Gateways Global Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-in-left animate-delay-400">
            Connecting Markets Worldwide Through Strategic Import & Export
            Solutions
          </p>
        </div>

        {/* Import/Export Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up animate-delay-600">
          {/* Import Section */}
          <div className="text-center animate-scale-in animate-delay-800">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Ship className="h-16 w-16 text-blue-400 animate-bounce-in animate-delay-900" />
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 animate-scale-in animate-delay-1000">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-slide-in-left animate-delay-1100">
                IMPORT
              </h3>
              <p className="text-white/80 text-sm animate-fade-in-up animate-delay-1200">
                Sourcing premium products from global suppliers to meet your
                business needs
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>

          {/* Global Network */}
          <div className="text-center animate-scale-in animate-delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Globe className="h-16 w-16 text-green-400 animate-spin-slow" />
                  <div className="absolute inset-0 border-2 border-green-400/30 rounded-full animate-ping"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-slide-in-left animate-delay-1200">
                GLOBAL NETWORK
              </h3>
              <p className="text-white/80 text-sm animate-fade-in-up animate-delay-1300">
                Extensive worldwide partnerships ensuring seamless trade
                operations
              </p>
              <div className="flex justify-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Export Section */}
          <div className="text-center animate-scale-in animate-delay-1000">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Plane className="h-16 w-16 text-orange-400 animate-bounce-in animate-delay-1100" />
                  <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-1 animate-scale-in animate-delay-1200">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 animate-slide-in-left animate-delay-1300">
                EXPORT
              </h3>
              <p className="text-white/80 text-sm animate-fade-in-up animate-delay-1400">
                Delivering quality products to international markets with
                excellence
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Icons */}
        <div className="flex justify-center space-x-8 mt-12 animate-fade-in-up animate-delay-1500">
          <div className="text-center animate-bounce-in animate-delay-1600">
            <Truck className="h-8 w-8 text-white/60 mx-auto mb-2 hover-scale" />
            <span className="text-white/60 text-xs">Land</span>
          </div>
          <div className="text-center animate-bounce-in animate-delay-1700">
            <Ship className="h-8 w-8 text-white/60 mx-auto mb-2 hover-scale" />
            <span className="text-white/60 text-xs">Sea</span>
          </div>
          <div className="text-center animate-bounce-in animate-delay-1800">
            <Plane className="h-8 w-8 text-white/60 mx-auto mb-2 hover-scale" />
            <span className="text-white/60 text-xs">Air</span>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-bounce-in animate-delay-2000">
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-30 animate-scale-in animate-delay-2100">
        <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-30 animate-fade-in-up animate-delay-2200">
        <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
      </div>
    </section>

    <AboutSection />
    <Footer />
  </div>
);

export default AboutUs;
