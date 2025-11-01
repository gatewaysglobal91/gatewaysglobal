import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import London from "@/assets/London.webp";

const PrivacyPolicy = () => (
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
              <ShieldCheck className="h-12 w-12 text-secondary animate-float" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animate-delay-200">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 animate-slide-in-left animate-delay-400">
            Gateways Global - Data Protection and Privacy
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
                At Gateways Global, we respect your privacy and are committed to
                protecting your personal data in accordance with the UK GDPR and
                Data Protection Act 2018. This policy explains how we handle
                your personal information.
              </p>
            </div>
          </div>

          {/* 1. Data We Collect */}
          <div className="mb-12 animate-fade-in-up animate-delay-300">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              1. Data We Collect
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect only the information necessary to deliver our
                services, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Your name, company name, and contact details</li>
                <li>Business registration, VAT, and payment information</li>
                <li>
                  Shipment or customs-related details (as required by law)
                </li>
                <li>Communication records (emails, calls, messages)</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                We do not collect or process special category data (such as
                health, ethnicity, or religion) unless legally required.
              </p>
            </div>
          </div>

          {/* 2. How We Use Your Data */}
          <div className="mb-12 animate-fade-in-up animate-delay-400">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              2. How We Use Your Data
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Your data is used for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Providing import/export and trading services</li>
                <li>Creating and managing contracts and invoices</li>
                <li>
                  Complying with customs, taxation, and anti-money laundering
                  regulations
                </li>
                <li>
                  Communicating updates, quotes, or offers you have requested
                </li>
                <li>Maintaining records for legal and audit purposes</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                We will only process your data where it is lawful — typically
                under contractual necessity, legal obligation, or your consent.
              </p>
            </div>
          </div>

          {/* 3. Sharing of Data */}
          <div className="mb-12 animate-fade-in-up animate-delay-500">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              3. Sharing of Data
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed">
                We do not sell or trade your personal information. We may share
                data with trusted service providers (such as logistics agents,
                customs brokers, financial institutions, and IT partners)
                strictly for the purpose of fulfilling your contract.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                If data is transferred outside the UK, we ensure appropriate
                safeguards such as Standard Contractual Clauses are in place.
              </p>
            </div>
          </div>

          {/* 4. Data Security */}
          <div className="mb-12 animate-fade-in-up animate-delay-600">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              4. Data Security
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed">
                We implement physical, digital, and procedural security measures
                — including encrypted storage, secure servers, and restricted
                staff access. We also have data breach protocols in line with UK
                ICO guidelines.
              </p>
            </div>
          </div>

          {/* 5. Your Rights */}
          <div className="mb-12 animate-fade-in-up animate-delay-700">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              5. Your Rights
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent (where applicable)</li>
                <li>
                  File a complaint with the Information Commissioner's Office
                  (ICO)
                </li>
              </ul>
            </div>
          </div>

          {/* 6. Retention */}
          <div className="mb-12 animate-fade-in-up animate-delay-800">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              6. Retention
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed">
                We retain personal data only for as long as necessary to provide
                our services and meet legal or tax obligations, typically up to
                seven years.
              </p>
            </div>
          </div>

          {/* 7. Contact */}
          <div className="animate-fade-in-up animate-delay-900">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary pb-2">
              7. Contact
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border/50">
              <p className="text-foreground/80 leading-relaxed mb-6">
                If you have any concerns or wish to exercise your rights, please
                contact our Data Protection Officer:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">
                    Data Protection Officer
                  </p>
                  <p className="text-foreground/80">Gateways Global Ltd</p>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:privacy@gatewaysglobal.com"
                    className="hover:underline hover:text-primary"
                  >
                    privacy@gatewaysglobal.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+44 (0)20 XXXX XXXX</span>
                </div>
                <p className="text-foreground/80">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
