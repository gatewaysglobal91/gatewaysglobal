import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe2, ChevronDown } from "lucide-react";
import gatewaysLogo from "@/assets/gateways-global-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    title: "Animal, Food & Beverages",
    slug: "animal-food-beverages",
    items: [
      { name: "Meat & Seafood", commodityId: "meat-poultry-seafood" },
      { name: "Dairy Products", commodityId: "dairy-related-products" },
      { name: "Fresh Produce", commodityId: "fruits-vegetables-produce" },
      { name: "Grains & Cereals", commodityId: "grains-bakery-staples" },
      { name: "Beverages", commodityId: "beverages" },
      { name: "Sweets", commodityId: "sweets-confectionery" },
      { name: "Ready Foods", commodityId: "sauces-condiments-ready-foods" },
    ],
  },
  {
    title: "Minerals, Chemicals & Plastics",
    slug: "minerals-chemicals-plastics",
    items: [
      {
        name: "Agricultural Chemicals",
        commodityId: "agricultural-agrochemicals",
      },
      { name: "Basic Chemicals", commodityId: "basic-specialty-chemicals" },
      {
        name: "Industrial Chemicals",
        commodityId: "industrial-chemicals-applications",
      },
      { name: "Paints & Coatings", commodityId: "paints-coatings-additives" },
      { name: "Plastics & Rubber", commodityId: "plastics-rubber" },
      { name: "Energy & Fuels", commodityId: "energy-fuels-gases" },
    ],
  },
  {
    title: "Leather, Textiles & Clothing",
    slug: "leather-textiles-clothing",
    items: [
      { name: "Leather Products", commodityId: "leather-leather-products" },
      { name: "Textile Fabrics", commodityId: "textile-fabrics-fibers" },
      { name: "Garments", commodityId: "garments-apparel" },
      { name: "Home Textiles", commodityId: "home-floor-textiles" },
      { name: "Fashion Accessories", commodityId: "fashion-accessories" },
    ],
  },
  {
    title: "Machinery, Electrical Equipment & Vehicles",
    slug: "machinery-equipment",
    items: [
      {
        name: "Industrial Machinery",
        commodityId: "industrial-heavy-machinery",
      },
      {
        name: "Power Equipment",
        commodityId: "engines-power-energy-equipment",
      },
      {
        name: "Electrical Equipment",
        commodityId: "electrical-electronic-equipment",
      },
      { name: "Vehicles", commodityId: "vehicles-transportation" },
      { name: "Precision Tools", commodityId: "tools-precision-equipment" },
    ],
  },
  {
    title: "Base Metals, Stone, Ceramic & Glass",
    slug: "base-metals-materials",
    items: [
      { name: "Metals & Alloys", commodityId: "metals-alloys" },
      { name: "Metal Products", commodityId: "metal-products-fabrications" },
      {
        name: "Building Materials",
        commodityId: "building-construction-materials",
      },
      { name: "Hardware & Tools", commodityId: "hardware-tools-fittings" },
      {
        name: "Kitchen & Lab Items",
        commodityId: "household-kitchen-laboratory-items",
      },
      { name: "Jewelry & Stones", commodityId: "jewelry-stones" },
    ],
  },
  {
    title: "Wood & Wood Products",
    slug: "wood-wood-products",
    items: [
      { name: "Raw Wood", commodityId: "raw-processed-wood" },
      { name: "Furniture", commodityId: "furniture-furnishings" },
      { name: "Wooden Articles", commodityId: "wooden-articles-utilities" },
    ],
  },
  {
    title: "Precious Metals",
    slug: "precious-metals",
    items: [
      { name: "Precious Metals", commodityId: "precious-metals-commodities" },
    ],
  },
  {
    title: "Miscellaneous Manufactures",
    slug: "miscellaneous-manufactures",
    items: [
      { name: "Toys & Sports", commodityId: "toys-games-sports" },
      { name: "Arts & Music", commodityId: "arts-music-education" },
      {
        name: "Gifts & Handicrafts",
        commodityId: "gifts-handicrafts-decorative",
      },
      {
        name: "Fashion Accessories",
        commodityId: "fashion-personal-accessories",
      },
      { name: "Household Items", commodityId: "household-daily-use-items" },
    ],
  },
  {
    title: "Antiques",
    slug: "antiques",
    items: [{ name: "Antique Items", commodityId: "antique-commodities" }],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 sm:h-24 items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={gatewaysLogo}
            alt="Gateways Global"
            className="h-14 sm:h-16 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">
              Gateways Global
            </span>
            <span className="text-xs text-muted-foreground">
              Import • Export • Worldwide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Center (desktop and laptop screens) */}
        <NavigationMenu className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="flex items-center space-x-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none whitespace-nowrap">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about-us">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none whitespace-nowrap">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/products-services">
                <NavigationMenuTrigger className="px-4 text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap">
                  Products & Services
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className="transition-all duration-300 ease-in-out">
                <div className="w-[300px] p-4 bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl rounded-lg">
                  <div className="space-y-1">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.slug}`}
                        className="block"
                      >
                        <div className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-md cursor-pointer border-l-4 border-transparent hover:border-primary hover:shadow-md hover:translate-x-1 group">
                          <span className="group-hover:font-semibold transition-all duration-300">
                            {category.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/terms-conditions">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none whitespace-nowrap">
                  Terms & Conditions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none whitespace-nowrap"
              >
                More
                <ChevronDown className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <div className="absolute left-1/2 top-full mt-1.5 flex -translate-x-1/2 justify-center z-50">
                  <div className="w-[200px] p-4 bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl rounded-lg">
                    <div className="space-y-1">
                      <Link to="/contact-us" onClick={() => setIsMoreOpen(false)} className="block">
                        <div className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-md cursor-pointer border-l-4 border-transparent hover:border-primary hover:shadow-md hover:translate-x-1 group">
                          <span className="group-hover:font-semibold transition-all duration-300">
                            Contact Us
                          </span>
                        </div>
                      </Link>
                      <Link to="/privacy-policy" onClick={() => setIsMoreOpen(false)} className="block">
                        <div className="px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-md cursor-pointer border-l-4 border-transparent hover:border-primary hover:shadow-md hover:translate-x-1 group">
                          <span className="group-hover:font-semibold transition-all duration-300">
                            Privacy Policy
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link to="/privacy-policy">
                <NavigationMenuLink className="px-2 py-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
                  Privacy Policy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>  */}

            {/* <NavigationMenuItem>
              <NavigationMenuLink className="px-2 py-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Tablet/Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Tablet/Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur animate-fade-in-up">
          <div className="container py-4 space-y-4">
            <nav className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>

              {/* Mobile Products & Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Products & Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-4 space-y-1 bg-muted/30 rounded-md p-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category.slug}`}
                      className="block py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about-us"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/terms-conditions"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="#"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
