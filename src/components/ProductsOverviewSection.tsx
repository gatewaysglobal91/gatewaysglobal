import { Wrench, Cog, Zap, Truck, HardHat, Factory } from "lucide-react";

export default function ProductsOverviewSection() {
  const productCategories = [
    {
      icon: Wrench,
      title: "Laboratory Equipment",
      items: [
        "Scientific Instrumentation",
        "Testing Equipment",
        "Analysis Tools",
      ],
    },
    {
      icon: Cog,
      title: "Industrial Equipment",
      items: ["Pumps & Machinery", "Control Systems", "Power Transmissions"],
    },
    {
      icon: Factory,
      title: "Oil & Gas Equipment",
      items: ["Drilling Equipment", "Valves & Fittings", "Safety Equipment"],
    },
    {
      icon: HardHat,
      title: "Construction Materials",
      items: ["Steel Structural", "Special Metals", "Building Materials"],
    },
    {
      icon: Zap,
      title: "Power & Energy",
      items: ["Generators", "Electrical Equipment", "Power Systems"],
    },
    {
      icon: Truck,
      title: "Heavy Equipment",
      items: ["Spare Parts", "Maintenance Tools", "Vehicle Components"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our Product Range
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left animate-delay-200">
              We supply a comprehensive range of products across multiple
              industries, ensuring quality and reliability in every delivery.
            </p>
          </div>

          {/* Detailed Product Description */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12 animate-fade-in-up animate-delay-400">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Supplies Consist of:
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Laboratory Equipment, Scientific Instrumentation, Alloys,
              Refractories, Instrumentations Equipment, Control Systems, Power
              Transmissions, Pumps, Machines Spare Parts, Boilers Spare Parts,
              KSB Pumps Spare Parts, Heavy Equipment Spare Parts, Heat
              Exchanger, Steel Structural, Special Metals, Casing, Tubing, Drill
              Bits, Valves, Flanges, Pipes & Fittings, Gaskets, Stud Bolts,
              Drilling Equipment, Mechanical & Electrical Equipment, Safety
              Equipment, Safety Materials, Chemical Products, Cement Additives &
              Drilling Mud Additives, Generators, Vehicles, Tools, and a variety
              of other commodities.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-foreground font-medium">
                All of our products meet all requirements of API as applicable
                to the product. Our manufacturers conform to and are accredited
                per ISO 9001. Each product has unique design features based on
                years of operational experience, benefiting our customers with
                the most flexible and cost-effective products in the industry.
              </p>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
