import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollText, Shield, FileText } from "lucide-react";
import London from "@/assets/London.webp";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${London})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-bounce-in">
                <ScrollText className="h-12 w-12 text-secondary animate-float" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animate-delay-200">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 animate-slide-in-left animate-delay-400">
              Gateways Global - Trading Terms and Conditions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 animate-fade-in-up animate-delay-200">
              <div className="bg-card rounded-lg p-8 shadow-soft border border-border/50">
                <p className="text-foreground/90 text-lg leading-relaxed">
                  These Terms and Conditions govern all business dealings,
                  website use, and service agreements with Gateways Global. By
                  accessing our website or engaging our services, you agree to
                  the following:
                </p>
              </div>
            </div>

            {/* 1. Scope of Services */}
            <div className="mb-12 animate-fade-in-up animate-delay-300">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                1. Scope of Services
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  Gateways Global operates as an import/export trading and
                  sourcing company. We provide services including but not
                  limited to product sourcing, supplier verification,
                  documentation, trade consultancy, and logistics coordination.
                  We do not act as a carrier, manufacturer, or insurer and are
                  not responsible for the physical loss or damage of goods once
                  in transit, unless explicitly agreed in writing.
                </p>
              </div>
            </div>

            {/* 2. Pricing and Payment */}
            <div className="mb-12 animate-fade-in-up animate-delay-400">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                2. Pricing and Payment
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    All quotations are based on current exchange rates, duties,
                    and freight costs at the time of issue. Prices are subject
                    to change without notice if such variables fluctuate.
                  </p>
                  <p>
                    Invoices must be paid in full by the due date stated. Late
                    payments may incur interest as per UK statutory rates.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Client Responsibilities */}
            <div className="mb-12 animate-fade-in-up animate-delay-500">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                3. Client Responsibilities
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  Clients must provide accurate information and required
                  documents for customs, compliance, and payment processes.
                  Gateways Global is not liable for delays or penalties
                  resulting from incomplete or incorrect information provided by
                  the client.
                </p>
              </div>
            </div>

            {/* 4. Liability */}
            <div className="mb-12 animate-fade-in-up animate-delay-600">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                4. Liability
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  While we strive for accuracy and professionalism, Gateways
                  Global shall not be liable for indirect, incidental, or
                  consequential losses such as lost profit, delay, or data loss.
                  Our maximum liability, where proven, shall not exceed the
                  total value of the specific transaction or service fee paid.
                </p>
              </div>
            </div>

            {/* 5. Force Majeure */}
            <div className="mb-12 animate-fade-in-up animate-delay-700">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                5. Force Majeure
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  We are not liable for delays or failures caused by
                  circumstances beyond our reasonable control — including
                  natural disasters, political unrest, strikes, or government
                  restrictions.
                </p>
              </div>
            </div>

            {/* 6. Data Protection */}
            <div className="mb-12 animate-fade-in-up animate-delay-800">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                6. Data Protection
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  We comply with the UK Data Protection Act 2018 and UK GDPR.
                  Client information is handled securely and only used for
                  service provision, legal compliance, and communication as
                  outlined in our Privacy Policy.
                </p>
              </div>
            </div>

            {/* 7. Governing Law */}
            <div className="mb-12 animate-fade-in-up animate-delay-900">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
                7. Governing Law
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
                <p className="text-foreground/80 leading-relaxed">
                  These Terms are governed by the laws of England and Wales. All
                  disputes shall be settled exclusively in UK courts.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center animate-fade-in-up animate-delay-1000 ">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need Clarification?
              </h3>
              <p className="text-foreground/80 mb-6">
                If you have any questions about these terms and conditions,
                please contact us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-foreground/70">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-secondary" />
                  <span>Last updated: January 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>Gateways Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
