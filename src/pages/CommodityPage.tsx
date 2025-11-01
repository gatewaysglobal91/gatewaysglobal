import { useParams, useNavigate } from "react-router-dom";
import { getCommodityById, getCommodityByCategory } from "@/data/commodities";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Check } from "lucide-react";
import NotFound from "./NotFound";
import LazyImage from "@/components/LazyImage";

const CommodityPage = () => {
  const { categorySlug, commodityId } = useParams<{
    categorySlug: string;
    commodityId: string;
  }>();
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to category page if no history
      navigate(`/category/${categorySlug}`);
    }
  };

  if (!categorySlug || !commodityId) {
    return <NotFound />;
  }

  const category = getCommodityByCategory(categorySlug);
  const commodity = getCommodityById(categorySlug, commodityId);

  if (!category || !commodity) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${commodity.images?.[0]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative container mx-auto px-4">
          {/* Back Navigation Button - Top Left */}
          <div className="mb-8 animate-fade-in-up">
            <button
              onClick={handleGoBack}
              className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full px-6 py-3 border border-white/20 hover:border-white/40"
            >
              <ArrowLeft className="h-5 w-5 text-secondary group-hover:text-white transition-colors duration-300 group-hover:-translate-x-1 transform" />
              <span className="text-white/90 group-hover:text-white font-small transition-colors duration-300">
                Go Back
              </span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 animate-bounce-in animate-delay-200">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  {category.name}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animate-delay-200">
              {commodity.name}
            </h1>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-600">
              {commodity.features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                {commodity.name}
              </h1>
            </div>

            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {commodity.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-muted rounded-lg overflow-hidden"
                >
                  <LazyImage
                    src={image}
                    alt={`${commodity.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Product Description
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {commodity.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commodity.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
                  >
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commodity.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card border rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommodityPage;
