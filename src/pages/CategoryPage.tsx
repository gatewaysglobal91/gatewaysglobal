import { useParams, Link, useNavigate } from "react-router-dom";
import { getCommodityByCategory } from "@/data/commodities";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  if (!categorySlug) {
    return <NotFound />;
  }

  const category = getCommodityByCategory(categorySlug);

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to category page if no history
      navigate("/");
    }
  };
  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-primary-foreground"
        style={
          category.commodities[0]?.images?.[0]
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${category.commodities[0].images[0]})`,
              }
            : {}
        }
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary-dark/50" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Commodities
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of products in this category, each meeting
              international quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.commodities.map((commodity, index) => (
              <Card
                key={commodity.id}
                className="hover-lift hover-glow border-0 shadow-lg group animate-fade-in-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  {/* Dynamic Image Gallery - Fixed Height */}
                  <div className="mb-6 h-48">
                    {(() => {
                      const images = commodity.images;
                      const imageCount = Math.min(
                        commodity.images?.length || 0,
                        4
                      ); // Max 4 images

                      // Dynamic grid classes based on image count
                      const getGridClass = (count: number) => {
                        switch (count) {
                          case 1:
                            return "grid-cols-1";
                          case 2:
                            return "grid-cols-2";
                          case 3:
                            return "grid-cols-2"; // 2 on top, 1 below
                          case 4:
                            return "grid-cols-2"; // 2x2 grid
                          default:
                            return "grid-cols-1";
                        }
                      };

                      return (
                        <div
                          className={`grid ${getGridClass(
                            imageCount
                          )} gap-2 h-full`}
                        >
                          {images?.slice(0, 4).map((img, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`
                                bg-muted rounded-lg overflow-hidden h-full
                                ${
                                  imageCount === 3 && imgIndex === 2
                                    ? "col-span-2"
                                    : ""
                                }
                              `}
                            >
                              <img
                                src={img}
                                alt={`${commodity.name} ${imgIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {commodity.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {commodity.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {commodity.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Link to={`/category/${categorySlug}/${commodity.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between hover:bg-primary/5 group/btn hover-scale"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
