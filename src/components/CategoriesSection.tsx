import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { commoditiesData } from "@/data/commodities";

const CategoriesSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Our Product
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            Categories
          </span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We specialize in 9 major categories with thousands of products,
          serving businesses across the globe with quality and reliability.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {commoditiesData.map((category, index) => {
          const IconComponent = category.icon;
          const animationType =
            index % 3 === 0
              ? "animate-fade-in-up"
              : index % 3 === 1
              ? "animate-slide-in-right"
              : "animate-rotate-in";

          return (
            <Card
              key={category.id}
              className={`hover-lift hover-glow hover-rotate border-0 shadow-lg warm-gradient ${animationType} animate-delay-${
                (index + 1) * 100
              } group`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="p-6 pb-5">
                <div
                  className={`w-16 h-16 rounded-2xl ${
                    category.bgColor
                  } flex items-center justify-center mb-5 animate-bounce-in animate-delay-${
                    (index + 2) * 100
                  } group-hover:animate-pulse-glow`}
                >
                  <IconComponent
                    className={`h-8 w-8 ${category.color} animate-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </div>
                <Link to={`/category/${category.slug}`}>
                  <CardTitle className="text-lg font-bold text-foreground leading-tight mb-2 hover-scale group-hover:text-primary transition-colors tracking-tight">
                    {category.name}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2">
                <div className="text-sm text-muted-foreground leading-relaxed mb-5 pb-3">
                  {category.description}
                </div>

                <div className="space-y-3 pt-4 border-t border-border/40">
                  <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground">
                    Key Products:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-muted-foreground">
                    {category.commodities.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={
                          item.id
                            ? `/category/${category.slug}/${item.id}`
                            : `/category/${category.slug}`
                        }
                      >
                        <li
                          className="flex items-start hover:text-secondary transition-colors group/item"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 mr-2 flex-shrink-0 group-hover/item:bg-secondary group-hover/item:scale-110 transition-all"></span>
                          <span className="line-clamp-2">{item.name}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
