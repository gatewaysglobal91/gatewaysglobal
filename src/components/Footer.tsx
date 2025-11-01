import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import gatewaysLogo from "@/assets/gateways-global-logo.png";

const productCategories = [
  { name: "Animal, Food & Beverages", slug: "animal-food-beverages" },
  {
    name: "Minerals, Chemicals & Plastics",
    slug: "minerals-chemicals-plastics",
  },
  { name: "Leather, Textiles & Clothing", slug: "leather-textiles-clothing" },
  { name: "Machinery & Equipment", slug: "machinery-equipment" },
  { name: "Base Metals & Materials", slug: "base-metals-materials" },
  { name: "Wood & Wood Products", slug: "wood-wood-products" },
  { name: "Precious Metals", slug: "precious-metals" },
  { name: "Miscellaneous Manufactures", slug: "miscellaneous-manufactures" },
  { name: "Antiques", slug: "antiques" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Company Info - Left */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={gatewaysLogo}
                alt="Gateways Global"
                className="h-8 sm:h-10 w-auto"
              />
              <div>
                <div className="text-lg sm:text-xl font-bold">Gateways Global</div>
                <div className="text-xs sm:text-sm text-white/70">
                  Import • Export • Worldwide
                </div>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Your trusted partner in international trade, connecting businesses
              worldwide with premium quality products across multiple
              categories.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm text-white/80">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span>info@gatewaysglobal.co.uk</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm text-white/80">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <div className="flex flex-col space-y-0.5">
                  <span>+44 7984791471</span>
                  <span>+44 7519150583</span>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span>Lyon road, Harrow HA1 2AF</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3 pt-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Product Categories - Center */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-secondary">
              Product Categories
            </h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-sm text-white/80 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Certifications - Right */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-secondary">
              Business Information
            </h4>

            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-white mb-1.5 text-sm">
                  Business Hours
                </h5>
                <div className="text-xs sm:text-sm text-white/80 space-y-0.5">
                  <div>Monday - Saturday: 9:00 AM - 6:00 PM</div>
                  <div>Sunday: 9:00 AM - 3:00 PM</div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-1.5 text-sm">
                  Certifications
                </h5>
                <div className="text-xs sm:text-sm text-white/80 space-y-0.5">
                  <div>• ISO 9001:2015 Certified</div>
                  <div>• International Trade License</div>
                  <div>• Export-Import License</div>
                  <div>• Quality Assurance Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 sm:py-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2025 Gateways Global. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/70">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
