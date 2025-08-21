import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, Globe, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We maintain the highest standards in sourcing, processing, and packaging our spices."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Built on trust and transparency, we honor every commitment to our global partners."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting authentic Indian flavors to kitchens and businesses worldwide."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Continuous innovation and improvement in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Six decades of passion, tradition, and excellence in the spice trade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Over 60 Years of Trust in Spices
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  JJ Spices has been at the heart of India's spice trade for over six decades. 
                  What started as a small family business in Unjha, Gujarat, has grown into a 
                  trusted name in the global spice export industry.
                </p>
                <p>
                  From Unjha – the spice hub of India – we export premium quality spices across 
                  the globe. Our strategic location in the APMC Unjha market gives us direct 
                  access to the finest spices from local farmers and trusted suppliers.
                </p>
                <p>
                  Our mission is simple yet profound: to deliver purity, reliability, and 
                  excellence in every shipment. We understand that spices are not just 
                  ingredients – they are the soul of cuisine, the bridge between cultures, 
                  and the essence of authentic flavors.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple to-electric-blue rounded-xl flex items-center justify-center shrink-0">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location & Heritage */}
            <Card className="mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Rooted in Unjha, Gujarat
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Located in APMC Unjha, Mehsana, Gujarat, we are positioned at the epicenter 
                    of India's spice trade. This strategic location allows us to source the 
                    finest quality spices directly from farmers and ensure rapid, efficient 
                    distribution to our global partners.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> APMC Unjha, Mehsana, Gujarat, India - 384170
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Experience the JJ Spices Difference?
              </h3>
              <p className="text-muted-foreground mb-8">
                Discover why businesses worldwide choose us as their trusted spice partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/products">Explore Our Products</Link>
                </Button>
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;