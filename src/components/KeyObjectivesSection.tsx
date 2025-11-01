import {
  Target,
  DollarSign,
  Shield,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";

export default function KeyObjectivesSection() {
  const objectives = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Quality in all the commodities and products we offer, meeting and exceeding our customers' expectations.",
    },
    {
      icon: DollarSign,
      title: "Price Competitiveness",
      description:
        "Competitive pricing in all commodities and products we offer, ensuring value for our clients.",
    },
    {
      icon: TrendingUp,
      title: "Reliable Supply",
      description:
        "Reliability of supply from source, ensuring consistent availability and timely delivery.",
    },
  ];

  const services = [
    {
      icon: Handshake,
      title: "Strengthen Relationships",
      description:
        "Broaden and strengthen existing relationships while establishing lasting partnerships worldwide.",
    },
    {
      icon: Target,
      title: "Avoid Downtime",
      description:
        "Provide solutions that avoid downtime and ensure efficient, productive operations.",
    },
    {
      icon: Users,
      title: "Increased Profitability",
      description:
        "Bring value and increased profitability to clients through innovative solutions.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Key Objectives */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Our Key Objectives
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground animate-slide-in-left animate-delay-200">
                As a leading trading company, we focus on delivering excellence
                through these core principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 text-center hover-lift animate-scale-in"
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services & Commitment */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-left animate-delay-200">
                We strive to broaden and strengthen our existing relationships
                while establishing lasting and mutually beneficial associations
                with new companies worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 0.3}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
