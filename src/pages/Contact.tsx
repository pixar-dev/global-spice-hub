import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["APMC Unjha", "Mehsana, Gujarat", "India - 384170"],
      action: "View on Google Maps",
      link: "https://maps.google.com/?q=APMC+Unjha+Mehsana+Gujarat+384170"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@jjspices.com", "sales@jjspices.com"],
      action: "Send Email",
      link: "mailto:info@jjspices.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Contact details", "available on request"],
      action: "Request Contact Info",
      link: "mailto:info@jjspices.com?subject=Contact Information Request"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST", "Sunday: Closed"],
      action: null,
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-spice-brown to-terracotta text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Ready to partner with India's trusted spice exporters? We're here to help you grow your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Contact Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're committed to providing prompt, 
              professional responses to all business inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-terracotta rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  {info.action && info.link && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {info.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Card */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Start Your Partnership Journey
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're looking for specific spice varieties, custom packaging solutions, 
                  or long-term supply partnerships, we're ready to discuss your requirements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-saffron/10 to-terracotta/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">For Business Inquiries</h4>
                  <p className="text-muted-foreground mb-4">
                    Product catalogs, pricing, bulk orders, and partnership opportunities.
                  </p>
                  <Button asChild variant="hero" className="w-full">
                    <a href="mailto:info@jjspices.com?subject=Business Inquiry">
                      Email Business Team
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-golden/10 to-saffron/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">For General Information</h4>
                  <p className="text-muted-foreground mb-4">
                    Company information, certifications, and general questions.
                  </p>
                  <Button asChild variant="golden" className="w-full">
                    <a href="mailto:info@jjspices.com?subject=General Inquiry">
                      Email Info Team
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Located in the heart of India's spice trading hub
                </p>
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://maps.google.com/?q=APMC+Unjha+Mehsana+Gujarat+384170" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Us on Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose JJ Spices?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">60+ Years</div>
              <div className="text-muted-foreground">Trust & Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+ Countries</div>
              <div className="text-muted-foreground">Global Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">500+ Clients</div>
              <div className="text-muted-foreground">Satisfied Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;