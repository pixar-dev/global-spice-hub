import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { name: "Jeera (Cumin Seeds)", description: "Premium export-grade cumin sourced from trusted Gujarat farms with rich aroma and flavor." },
    { name: "Saunf (Fennel Seeds)", description: "Aromatic fennel seeds with natural sweetness, perfect for culinary and medicinal uses." },
    { name: "Saunf (Lakhnavi Fennel Seeds)", description: "Premium Lucknow variety fennel seeds known for their superior quality and distinctive taste." },
    { name: "Rai (Small Mustard Seeds)", description: "Small black mustard seeds with pungent flavor, essential for Indian cuisine and tempering." },
    { name: "Rai (Regular Mustard Seeds)", description: "High-quality regular mustard seeds with consistent oil content and strong flavor profile." },
    { name: "Methi (Fenugreek Seeds)", description: "Fresh fenugreek seeds with bitter-sweet taste, rich in nutrients and medicinal properties." },
    { name: "Dhana Jeera (Cumin + Coriander Powder)", description: "Perfectly balanced blend of ground cumin and coriander, ready-to-use spice mix." },
    { name: "Jeera (Cumin Powder)", description: "Finely ground cumin powder with intense flavor, essential for authentic Indian cooking." },
    { name: "Ajwain (Carom Seeds)", description: "Pungent carom seeds with digestive properties, widely used in Indian cuisine and medicine." },
    { name: "Tal (Sesame Seeds)", description: "Premium white sesame seeds with nutty flavor, perfect for cooking and oil extraction." },
    { name: "Tal (Sesame Seeds – Roasted)", description: "Roasted sesame seeds with enhanced nutty flavor and aroma, ready for immediate use." },
    { name: "Dhana (Coriander Seeds)", description: "Fresh coriander seeds with citrusy fragrance, fundamental spice for global cuisines." },
    { name: "Dhanadal (Coriander Splits)", description: "Split coriander seeds for faster cooking and enhanced flavor release in preparations." },
    { name: "Alsi (Flaxseeds)", description: "Omega-3 rich flaxseeds with mild nutty flavor, perfect for health-conscious consumers." },
    { name: "Alsi (Flaxseeds – Roasted)", description: "Roasted flaxseeds with enhanced flavor and extended shelf life for immediate consumption." },
    { name: "Isabgol (Psyllium Husk)", description: "High-quality psyllium husk with superior fiber content for digestive health applications." }
  ];

  const packageSizes = ["500g", "1kg", "5kg", "30kg", "60kg"];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-saffron to-terracotta text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Premium Spices
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Authentic Indian spices sourced from trusted farms across India
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete Product Catalog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium export-grade spices carefully sourced and processed to meet international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-golden to-saffron rounded-xl mb-4 mx-auto flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 text-center">{product.name}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Packaging Section */}
          <Card className="mb-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Flexible Packaging Options
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We offer multiple packaging sizes to meet diverse business requirements, 
                from small-scale retailers to large industrial buyers.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {packageSizes.map((size, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-golden to-saffron text-spice-brown px-6 py-3 rounded-lg font-semibold shadow-md"
                  >
                    {size}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Custom packaging solutions available for bulk orders
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Interested in Our Products?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for detailed specifications, pricing, and custom packaging options. 
              We're here to help you find the perfect spice solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button asChild variant="default" size="lg">
                <Link to="/global-presence">Our Global Reach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;