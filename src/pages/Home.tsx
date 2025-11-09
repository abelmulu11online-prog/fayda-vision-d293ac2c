import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Shield, 
  Smartphone, 
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Wallet,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The National Digital Platform for Every Ethiopian Learner
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Transforming education through secure digital infrastructure, eliminating fraud, 
              and empowering students, parents, and educators nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Shield className="mr-2 h-5 w-5" />
                  Login with Fayda ID
                </Button>
              </Link>
              <Link to="/how-to">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* National Impact Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">National Impact Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time metrics demonstrating the transformative power of digital education infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Students Covered"
              value="2.8M+"
              description="Across all regions"
              icon={Users}
              trend="+15% this quarter"
            />
            <StatCard
              title="Credentials Verified"
              value="450K+"
              description="Blockchain-secured"
              icon={Award}
              trend="100% fraud elimination"
            />
            <StatCard
              title="Dropout Reduction"
              value="68%"
              description="Early intervention success"
              icon={TrendingUp}
              trend="Target: 80%"
            />
            <StatCard
              title="Admin Time Saved"
              value="52%"
              description="Teacher workload reduction"
              icon={BookOpen}
              trend="Target achieved"
            />
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every Stakeholder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed for students, parents, teachers, and administrators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 card-interactive">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Students</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Access grades, attendance, and assignments instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Blockchain-verified portable academic credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Job-ready digital portfolio with shareable links</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 card-interactive">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Parents</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Real-time academic progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Integrated mobile money payments (Telebirr/M-Pesa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Early warning system for academic intervention</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 card-interactive">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Schools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>50% reduction in administrative workload</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Streamlined digital journal and assessment tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Automated EMIS reporting and compliance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Breakthrough Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced tools designed to solve Ethiopia's most critical education challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 card-interactive">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alarm Bell System</h3>
                  <p className="text-muted-foreground mb-3">
                    AI-powered early warning system identifies at-risk students before they drop out, 
                    enabling timely intervention.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    68% dropout reduction achieved
                  </span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 card-interactive">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-verified/20 flex items-center justify-center flex-shrink-0 border border-verified/30">
                  <Shield className="h-7 w-7 text-verified" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Blockchain Verification</h3>
                  <p className="text-muted-foreground mb-3">
                    Immutable EduChain DLT anchors every credential, enabling instant employer 
                    verification and eliminating degree fraud.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-verified">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    100% fraud elimination
                  </span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 card-interactive">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-secondary/30">
                  <Wallet className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrated Payments</h3>
                  <p className="text-muted-foreground mb-3">
                    Seamless mobile money integration with Telebirr and M-Pesa enables transparent 
                    fee payments and financial inclusion.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Private schools only
                  </span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 card-interactive">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                  <Smartphone className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low-Bandwidth Access</h3>
                  <p className="text-muted-foreground mb-3">
                    USSD/SMS functionality ensures nationwide accessibility, enabling rural schools 
                    to participate without reliable internet.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    100% inclusion achieved
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Ethiopian Education?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join millions of students, parents, and educators on the national digital education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Shield className="mr-2 h-5 w-5" />
                  Secure Login with Fayda ID
                </Button>
              </Link>
              <Link to="/how-to">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Step-by-Step Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
