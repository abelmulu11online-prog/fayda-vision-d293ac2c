import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"fayda" | "traditional">("fayda");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 rounded-2xl gradient-hero items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome to Fayda e-School</h1>
          <p className="text-muted-foreground">
            Secure access to Ethiopia's national education platform
          </p>
        </div>

        <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as "fayda" | "traditional")} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fayda">Fayda ID (Recommended)</TabsTrigger>
            <TabsTrigger value="traditional">Email</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fayda" className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-success mb-1">Secure National Authentication</p>
                <p className="text-muted-foreground">
                  Login with your verified Fayda Digital ID for high-assurance access
                </p>
              </div>
            </div>
            
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => window.location.href = '/dashboard/student'}
            >
              <Shield className="mr-2 h-5 w-5" />
              Continue with Fayda ID
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              You will be redirected to the National Identity Provider (NIDP) for secure authentication
            </p>
          </TabsContent>
          
          <TabsContent value="traditional" className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20 flex gap-3">
              <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-warning mb-1">Limited Access Method</p>
                <p className="text-muted-foreground">
                  Email login is available for testing. Full features require Fayda ID verification.
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              
              <Button className="w-full" variant="outline">
                Sign In with Email
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t pt-6">
          <p className="text-sm text-center text-muted-foreground mb-4">
            Select your role after authentication:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/dashboard/student">
              <Button variant="outline" size="sm" className="w-full">Student</Button>
            </Link>
            <Link to="/dashboard/parent">
              <Button variant="outline" size="sm" className="w-full">Parent</Button>
            </Link>
            <Link to="/dashboard/teacher">
              <Button variant="outline" size="sm" className="w-full">Teacher</Button>
            </Link>
            <Link to="/dashboard/admin">
              <Button variant="outline" size="sm" className="w-full">Administrator</Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Register with Fayda ID
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
