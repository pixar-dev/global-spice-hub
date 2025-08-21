import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Globe, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const Home = () => {
  const featuredProducts = [
    { name: "Jeera (Cumin Seeds)", description: "Premium export-grade cumin sourced from Gujarat farms" },
    { name: "Saunf (Fennel Seeds)", description: "Aromatic fennel seeds with natural sweetness" },
    { name: "Dhana (Coriander Seeds)", description: "Fresh coriander seeds with rich flavor profile" },
    { name: "Methi (Fenugreek Seeds)", description: "High-quality fenugreek seeds for global markets" }
  ];

  const stats = [
    { icon: Globe, label: "Countries Served", value: "15+" },
    { icon: Award, label: "Years of Experience", value: "60+" },
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: MapPin, label: "Export Hub", value: "Unjha, Gujarat" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 to-midnight/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            JJ Spices
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Supplying the World with Authentic Indian Spices
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            From India's heartland to your table – delivering trust in every grain for over 60 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="warm" size="lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-electric-blue to-purple rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Over 60 Years of Trust in Spices
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              JJ Spices has been at the heart of India's spice trade for over six decades. 
              From Unjha – the spice hub of India – we export premium quality spices across the globe. 
              Our mission is to deliver purity, reliability, and excellence in every shipment.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Premium Spices
            </h2>
            <p className="text-lg text-muted-foreground">
              Authentic Indian spices sourced from trusted farms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="card-modern group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-amber rounded-xl mb-4 mx-auto shadow-card"></div>
                  <h3 className="font-semibold text-foreground mb-2 text-center">{product.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients worldwide who trust JJ Spices for their premium spice needs.
          </p>
          <Button asChild variant="warm" size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;