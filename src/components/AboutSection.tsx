import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Clock,
  Users,
  Globe2,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Compliance & Integrity",
    description:
      "We adhere to the highest standards of ethical business practices and regulatory compliance.",
  },
  {
    icon: Globe2,
    title: "Global Market Insight",
    description:
      "Leveraging deep market knowledge across multiple continents to your advantage.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your success is our priority. We build lasting relationships based on trust and results.",
  },
  {
    icon: TrendingUp,
    title: "Innovative Solutions",
    description:
      "Combining technology and expertise to solve complex trade challenges.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Gateways Global
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting businesses worldwide through trusted trade solutions
            since 2008
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Journey
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2008, Gateways Global was born from a vision to
                simplify international trade. What began as a small operation in
                India and Southeast Asia has grown into a global enterprise with
                a presence across four continents.
              </p>
              <p>
                Our London headquarters serves as the hub for our worldwide
                operations, connecting businesses across Europe, Asia, Africa,
                and the Americas. Over the years, we've built a reputation for
                reliability, integrity, and exceptional service in the global
                trade industry.
              </p>
              <p>
                Today, we're proud to support a diverse clientele, from emerging
                businesses to established corporations, helping them navigate
                the complexities of international trade with confidence.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To empower businesses of all sizes to expand their global reach
              through innovative, compliant, and efficient trade solutions that
              drive sustainable growth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6 pt-6 border-t border-gray-200">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted global trade partner, recognized for
              transforming the way businesses connect and grow in international
              markets.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            What Sets Us Apart
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">16+</div>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
