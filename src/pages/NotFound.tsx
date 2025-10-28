import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold text-foreground">Oops! Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for has been removed or doesn't exist. 
          Let's get you back on track with our junk removal services!
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </a>
          <a 
            href="tel:7202108173" 
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/90 transition-colors"
          >
            Call Us: (720) 210-8173
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
