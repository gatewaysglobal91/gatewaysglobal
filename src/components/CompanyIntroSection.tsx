import LondonImg from "@/assets/London.webp";

export default function CompanyIntroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Company Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Gateways Global. Ltd
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Company Description */}
          <div className="space-y-6 mb-12 animate-slide-in-left animate-delay-200">
            <div className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Gateways Global.</strong>
              <p>Your trusted partner in global trade and sourcing.</p>
              <p>
                Since 2008, Gateways Global has been helping businesses around
                the world connect, source, and trade with confidence. Based in
                London, we bridge buyers and suppliers across continents,
                simplifying international trade through transparent processes,
                verified networks, and reliable delivery.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are importing raw materials, exporting finished
              products, or exploring new markets, we provide end-to-end trading
              solutions designed to reduce risk, save time, and maximise your
              margins.
            </p>

            {/* <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  These Supplies Consist of
                </strong>{" "}
                Laboratory Equipment, Scientific Instrumentation, Alloys,
                Refractories, Instrumentations Equipment, Control Systems, Power
                Transmissions, Pumps, Machines Spare Parts, Boilers Spare Parts,
                KSB Pumps Spare Parts, Heavy Equipment Spare Parts, Heat
                Exchanger, Steel Structural, Special Metals, Casing, Tubing,
                Drill Bits, Valves, Flanges, Pipes & Fittings, Gaskets, Stud
                Bolts, Drilling Equipment, Mechanical & Electrical Equipment,
                Safety Equipment, Safety Materials, Chemical Products, Cement
                Additives & Drilling Mud Additives, Generators, Vehicles, Tools,
                and a variety of other commodities.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-foreground font-medium">
                  All of our products meet all requirements of API as applicable
                  to the product. Also, our Manufacturers conform to and are
                  accredited per ISO 9001. Each and every product has unique
                  design features based on years of operational experience. This
                  benefits our customers by giving them the most flexible and
                  cost effective products in the industry.
                </p>
              </div>
            </div> */}
          </div>

          {/* London Skyline Image Section */}
          <div className="relative rounded-2xl overflow-hidden animate-fade-in-up animate-delay-400">
            <div
              className="h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${LondonImg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-4xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Serving Global Markets from the Heart of London
                  </h3>
                  <p className="text-lg text-white/90">
                    Based in the United Kingdom, we leverage our strategic
                    location and extensive network to deliver exceptional
                    service to clients across Middle East, Africa, and South
                    East Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mt-16 mb-12 animate-slide-in-up animate-delay-500">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We specialise in:
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Product Sourcing & Supplier Verification
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We identify credible suppliers, conduct due diligence, and
                    ensure quality and compliance before you commit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Global Import & Export Management
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    From market research and product selection to contract
                    negotiation and documentation, we manage your trade process
                    seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Customs & Regulatory Compliance
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our experts handle all international documentation, HS
                    codes, and trade regulations, ensuring smooth customs
                    clearance worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Trade Finance Assistance
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We help you secure letters of credit, escrow arrangements,
                    and secure payment channels for safe transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Warehousing, Inspection & Distribution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    With partners across major ports and trade hubs, we ensure
                    timely storage, inspection, and shipment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Market Expansion & Trade Consultancy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide guidance on tariffs, taxes, logistics, and
                    sourcing strategies for companies looking to expand into new
                    territories.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Gateways Global */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Why Choose Gateways Global
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Proven Experience:
                    </h4>
                    <p className="text-muted-foreground">
                      17+ years of real-world trading expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Global Network:
                    </h4>
                    <p className="text-muted-foreground">
                      Reliable supplier and buyer connections across the UK,
                      Europe, Asia, Africa, and the Americas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Integrity First:
                    </h4>
                    <p className="text-muted-foreground">
                      We prioritise transparency and ethical trade practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Compliance Driven:
                    </h4>
                    <p className="text-muted-foreground">
                      Every process meets UK, EU, and global trade regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Personal Support:
                    </h4>
                    <p className="text-muted-foreground">
                      A single point of contact throughout your trade journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-lg text-foreground font-medium italic">
                  At Gateways Global, we don't just move goods — we move
                  businesses forward.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-slide-in-right animate-delay-600">
            <div className="text-center p-6 bg-card border border-border rounded-lg hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">2009</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">API Compliant</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
