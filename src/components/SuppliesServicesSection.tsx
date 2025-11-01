import suppliesServicesImg from "@/assets/supplies-services.webp";

export default function SuppliesServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image with Overlay Content */}
          <div className="relative rounded-2xl overflow-hidden animate-fade-in-up">
            <div
              className="h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${suppliesServicesImg})` }}
            >
              {/* Gradient Overlay - Stronger on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/40 lg:to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-6 md:px-8 lg:px-16">
                  {/* Mobile/Tablet: Full width content */}
                  <div className="lg:hidden">
                    <div className="space-y-6 text-white animate-slide-in-up animate-delay-200">
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        Gateways Global Co. Supplies & Services
                        <span className="text-secondary"> Strives</span>
                      </h2>

                      <div className="space-y-4">
                        <p className="text-base md:text-lg text-white/90 leading-relaxed">
                          to broaden and strengthen their existing
                          relationships. We also want to establish lasting and
                          mutually beneficial associations with new companies
                          worldwide.
                        </p>

                        <p className="text-base md:text-lg text-white/90 leading-relaxed">
                          We bring value and increased profitability to its
                          clients by providing solutions that avoid downtime and
                          ensure an efficient and productive oilfield operation.
                        </p>
                      </div>

                      {/* Key Benefits - Stacked on mobile */}
                      <div className="space-y-3">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Relationship Building
                          </h3>
                          <p className="text-white/80 text-sm">
                            Strengthening existing partnerships while
                            establishing new global connections
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Operational Excellence
                          </h3>
                          <p className="text-white/80 text-sm">
                            Ensuring efficient and productive operations with
                            minimal downtime
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Two column layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - empty space for image visibility */}
                    <div></div>

                    {/* Right side - Content */}
                    <div className="space-y-6 text-white animate-slide-in-right animate-delay-200">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Gateways Global Co. Supplies & Services
                        <span className="text-secondary"> Strives</span>
                      </h2>

                      <div className="space-y-4">
                        <p className="text-lg text-white/90 leading-relaxed">
                          to broaden and strengthen their existing
                          relationships. We also want to establish lasting and
                          mutually beneficial associations with new companies
                          worldwide.
                        </p>

                        <p className="text-lg text-white/90 leading-relaxed">
                          We bring value and increased profitability to its
                          clients by providing solutions that avoid downtime and
                          ensure an efficient and productive oilfield operation.
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-colors">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Relationship Building
                          </h3>
                          <p className="text-white/80 text-sm">
                            Strengthening existing partnerships while
                            establishing new global connections
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-colors">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Operational Excellence
                          </h3>
                          <p className="text-white/80 text-sm">
                            Ensuring efficient and productive operations with
                            minimal downtime
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
