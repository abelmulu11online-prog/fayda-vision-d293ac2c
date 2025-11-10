import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap, BookOpen, LogIn, Users, TrendingUp } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span>Fayda e-School</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
            >
              Home
            </Link>
            <a href="/#features" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Features</a>
            <a href="/#benefits" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Benefits</a>
            <a href="/#partnerships" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Partnerships</a>
            <a href="/#testimonials" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Testimonials</a>
            <a href="/#packages" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Packages</a>
            <Link 
              to="/how-to" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/how-to") ? "text-primary" : "text-foreground"}`}
            >
              How-To Guides
            </Link>
            <Link 
              to="/verification" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/verification") ? "text-primary" : "text-foreground"}`}
            >
              Verify Credentials
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-4">
                <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span>Fayda e-School</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The National Digital Platform for Every Ethiopian Learner
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/how-to" className="hover:text-primary transition-colors">How-To Guides</Link></li>
                <li><Link to="/verification" className="hover:text-primary transition-colors">Verify Credentials</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ministry of Education</h3>
              <p className="text-sm text-muted-foreground">
                © 2025 Federal Democratic Republic of Ethiopia<br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
