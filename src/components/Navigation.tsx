import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/global-presence", label: "Global Presence" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="glass border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-purple rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">JJ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">JJ Spices</h1>
              <p className="text-xs text-muted-foreground">Authentic Indian Spices</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1",
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;