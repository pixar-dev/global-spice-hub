import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Truck, Ship, Plane } from "lucide-react";

const GlobalPresence = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Established distribution channels across 15+ countries with growing partnerships worldwide."
    },
    {
      icon: Ship,
      title: "Export Excellence",
      description: "Efficient sea freight solutions for bulk orders with proper documentation and quality assurance."
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast air shipping for urgent orders and premium products requiring quick delivery."
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "End-to-end logistics management from our APMC Unjha facility to your destination."
    }
  ];

  const regions = [
    { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait", growth: "Growing" },
    { name: "Southeast Asia", countries: "Singapore, Malaysia, Thailand", growth: "Expanding" },
    { name: "Europe", countries: "UK, Germany, Netherlands", growth: "Established" },
    { name: "North America", countries: "USA, Canada", growth: "New Markets" },
    { name: "Africa", countries: "South Africa, Kenya, Nigeria", growth: "Emerging" },
    { name: "Australia & Oceania", countries: "Australia, New Zealand", growth: "Partner Network" }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Global Presence
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Trusted worldwide – JJ Spices exports to growing markets across the globe
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Export Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive export capabilities ensure reliable delivery of premium spices worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald to-electric-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Regional Markets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our global footprint spans across major regions with established partnerships and growing networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regions.map((region, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{region.name}</h3>
                    <span className="bg-gradient-to-r from-coral to-amber text-white px-3 py-1 rounded-full text-xs font-medium">
                      {region.growth}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Key Markets:</strong> {region.countries}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="bg-gradient-to-br from-emerald/10 to-electric-blue/10 border-emerald/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Interactive Global Map
              </h3>
              <p className="text-muted-foreground mb-6">
                Detailed market presence visualization coming soon. Contact us to learn more about 
                our presence in your region and explore partnership opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expand Your Market with JJ Spices
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our global network of satisfied partners. Whether you're looking to import premium 
            Indian spices or explore new market opportunities, we're here to support your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cool" size="lg">
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;