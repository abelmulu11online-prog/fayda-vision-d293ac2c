import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield,
  DollarSign,
  Users,
  Award,
  CheckCircle2,
  FileText,
  Lock,
  BarChart3,
  PieChart
} from "lucide-react";

const InvestorDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Investment Opportunity Dashboard</h1>
                <div className="verified-badge text-sm">
                  <Shield className="h-4 w-4" />
                  PPP Verified Investor
                </div>
              </div>
              <p className="opacity-90">Fayda e-School Public-Private Partnership Portal</p>
              <p className="text-sm opacity-80 mt-1">Secure access for authorized investment stakeholders</p>
            </div>
            <Button variant="secondary" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              Download Full Prospectus
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Key Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-interactive border-2 border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-6 w-6 text-primary" />
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <p className="text-4xl font-bold mb-1">2.8M</p>
            <p className="text-sm text-muted-foreground mb-2">Active Users</p>
            <Badge variant="outline" className="text-success border-success text-xs">
              +15% YoY growth
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-secondary/20">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-6 w-6 text-secondary" />
              <span className="text-xs font-medium text-success">Recurring</span>
            </div>
            <p className="text-4xl font-bold mb-1">$2.4M</p>
            <p className="text-sm text-muted-foreground mb-2">Annual Revenue</p>
            <Badge variant="outline" className="text-secondary border-secondary text-xs">
              Sustainable model
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-verified/30">
            <div className="flex items-center justify-between mb-2">
              <Award className="h-6 w-6 text-verified" />
              <CheckCircle2 className="h-5 w-5 text-verified" />
            </div>
            <p className="text-4xl font-bold mb-1">100%</p>
            <p className="text-sm text-muted-foreground mb-2">Fraud Prevention</p>
            <Badge variant="outline" className="text-verified border-verified text-xs">
              Blockchain-secured
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-accent/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-xs font-medium text-success">Target met</span>
            </div>
            <p className="text-4xl font-bold mb-1">68%</p>
            <p className="text-sm text-muted-foreground mb-2">Dropout Reduction</p>
            <Badge variant="outline" className="text-accent border-accent text-xs">
              Social impact
            </Badge>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investment Methods */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Available Investment Methods
              </h2>

              <div className="space-y-4">
                <Card className="p-5 border-2 border-primary/20 card-interactive">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Revenue-Sharing Partnership</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Participate in transaction fee revenue from verification services and 
                        digital payment processing. Stable, recurring income stream.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Expected ROI</p>
                          <p className="font-bold text-lg text-success">12-15%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Term</p>
                          <p className="font-bold text-lg">5-7 years</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Risk Level</p>
                          <p className="font-bold text-lg text-primary">Low</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Request Investment Proposal</Button>
                </Card>

                <Card className="p-5 border card-interactive">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Infrastructure Development Bond</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Fund expansion to additional schools and regions. Government-backed 
                        fixed-income instrument with priority repayment.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Expected ROI</p>
                          <p className="font-bold text-lg text-success">8-10%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Term</p>
                          <p className="font-bold text-lg">3-5 years</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Risk Level</p>
                          <p className="font-bold text-lg text-success">Very Low</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Request Bond Prospectus</Button>
                </Card>

                <Card className="p-5 border card-interactive">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technology Licensing Agreement</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        License the FES platform technology for deployment in other African nations. 
                        Upfront licensing fee plus ongoing royalty structure.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Expected ROI</p>
                          <p className="font-bold text-lg text-success">20-25%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Term</p>
                          <p className="font-bold text-lg">10 years</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Risk Level</p>
                          <p className="font-bold text-lg text-warning">Medium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Explore Licensing Terms</Button>
                </Card>
              </div>
            </Card>

            {/* Data Sovereignty & Governance */}
            <Card className="p-6 border-2 border-verified/30 bg-verified/5">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-verified" />
                Data Sovereignty & Governance Structure
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background border-2 border-verified/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="h-5 w-5 text-verified" />
                    <h3 className="font-semibold">Ministry of Education Ownership</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    The Federal Democratic Republic of Ethiopia maintains 100% ownership and 
                    control of all student data, academic records, and national education infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-verified flex-shrink-0 mt-0.5" />
                      <span>All data stored on Ethiopian government-controlled servers</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-verified flex-shrink-0 mt-0.5" />
                      <span>Compliant with Personal Data Protection Proclamation (PDPP)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-verified flex-shrink-0 mt-0.5" />
                      <span>Blockchain records anchored to nationally-controlled EduChain DLT</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-background border">
                  <h3 className="font-semibold mb-2">Investor Rights & Limitations</h3>
                  <p className="text-sm text-muted-foreground">
                    Private investors participate through financial instruments only. 
                    No access to sensitive student data or operational control of the platform.
                  </p>
                </div>
              </div>
            </Card>

            {/* Financial Performance */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Revenue Breakdown & Sustainability
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Verification Fee Revenue</span>
                    <span className="font-bold">$1.2M/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Employers pay nominal fee per credential verification. High volume, low friction.
                  </p>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Digital Payment Transaction Fees</span>
                    <span className="font-bold">$0.9M/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Small percentage of Telebirr/M-Pesa school fee transactions (private schools only).
                  </p>
                  <div className="h-2 bg-secondary/20 rounded-full">
                    <div className="h-2 bg-secondary rounded-full" style={{ width: '37.5%' }}></div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Premium Feature Subscriptions</span>
                    <span className="font-bold">$0.3M/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Private schools pay for advanced analytics and reporting tools.
                  </p>
                  <div className="h-2 bg-accent/20 rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: '12.5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/30">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Annual Revenue</span>
                  <span className="text-2xl font-bold text-success">$2.4M</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Projected to grow 18-22% annually as adoption expands
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Performance Indicators */}
            <Card className="p-6 border-2 border-success/30">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <PieChart className="h-5 w-5 text-success" />
                Key Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Platform Adoption</span>
                    <span className="font-bold text-success">98.5%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Of eligible schools connected</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">User Satisfaction</span>
                    <span className="font-bold text-success">4.7/5.0</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Across all user groups</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">System Uptime</span>
                    <span className="font-bold text-success">99.8%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Exceeding SLA targets</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                    <span className="font-bold text-success">+22%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Year-over-year</p>
                </div>
              </div>
            </Card>

            {/* Social Impact Metrics */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Social Impact</h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium mb-1">Student Dropout Reduction</p>
                  <p className="text-3xl font-bold text-success">68%</p>
                  <p className="text-xs text-muted-foreground mt-1">Via early intervention system</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium mb-1">Teacher Time Saved</p>
                  <p className="text-3xl font-bold text-success">52%</p>
                  <p className="text-xs text-muted-foreground mt-1">Administrative efficiency gain</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium mb-1">Fraud Prevention</p>
                  <p className="text-3xl font-bold text-verified">100%</p>
                  <p className="text-xs text-muted-foreground mt-1">Blockchain verification</p>
                </div>
              </div>
            </Card>

            {/* Risk Assessment */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Risk Profile</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                  <span className="text-sm font-medium">Government Backing</span>
                  <Badge className="bg-success/20 text-success border-success">Low Risk</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                  <span className="text-sm font-medium">Revenue Model</span>
                  <Badge className="bg-success/20 text-success border-success">Stable</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                  <span className="text-sm font-medium">Technology Risk</span>
                  <Badge variant="outline" className="text-primary border-primary">Moderate</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                  <span className="text-sm font-medium">Market Demand</span>
                  <Badge className="bg-success/20 text-success border-success">High</Badge>
                </div>
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Investment Process</h3>
              <div className="space-y-2">
                <Button className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Due Diligence Pack
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Schedule Site Visit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Submit Investment Inquiry
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
