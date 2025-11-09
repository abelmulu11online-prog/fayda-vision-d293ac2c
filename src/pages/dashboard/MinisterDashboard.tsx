import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  TrendingUp,
  Shield,
  MapPin,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  Search,
  Award
} from "lucide-react";

const MinisterDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Ministry of Education Portal</h1>
                <div className="verified-badge text-sm">
                  <Shield className="h-4 w-4" />
                  National Authority
                </div>
              </div>
              <p className="opacity-90">Federal Democratic Republic of Ethiopia</p>
              <p className="text-sm opacity-80 mt-1">National Education Management & Oversight System</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* National Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-interactive border-2 border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <p className="text-4xl font-bold mb-1">2.8M</p>
            <p className="text-sm text-muted-foreground mb-2">Students Covered</p>
            <Badge variant="outline" className="text-success border-success text-xs">
              +15% this year
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-secondary/20">
            <div className="flex items-center justify-between mb-2">
              <Building2 className="h-6 w-6 text-secondary" />
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
            <p className="text-4xl font-bold mb-1">8,542</p>
            <p className="text-sm text-muted-foreground mb-2">Schools Connected</p>
            <Badge variant="outline" className="text-secondary border-secondary text-xs">
              National rollout
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-verified/30">
            <div className="flex items-center justify-between mb-2">
              <Award className="h-6 w-6 text-verified" />
              <Shield className="h-5 w-5 text-verified" />
            </div>
            <p className="text-4xl font-bold mb-1">452K</p>
            <p className="text-sm text-muted-foreground mb-2">Verified Credentials</p>
            <Badge variant="outline" className="text-verified border-verified text-xs">
              100% fraud-free
            </Badge>
          </Card>

          <Card className="p-6 card-interactive border-2 border-success/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-6 w-6 text-success" />
              <span className="text-xs font-medium text-success">-68%</span>
            </div>
            <p className="text-4xl font-bold mb-1">68%</p>
            <p className="text-sm text-muted-foreground mb-2">Dropout Reduction</p>
            <Badge variant="outline" className="text-success border-success text-xs">
              Target: 80%
            </Badge>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Credential Verification Tool */}
            <Card className="p-6 border-2 border-verified/30">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-verified" />
                Rapid Credential Verification
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Credential ID</label>
                  <Input placeholder="e.g., CERT-ETH-2024-123456" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Student Fayda ID</label>
                  <Input placeholder="e.g., FID-1234567890" />
                </div>
                <Button className="w-full" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Verify Credential via DLT
                </Button>
              </div>

              <div className="p-4 rounded-lg bg-verified/10 border border-verified/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-verified" />
                  <span className="font-semibold text-verified">Ministry Verification</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Access the same blockchain-verified system used by employers. 
                  All degree and transcript authenticity confirmed via EduChain DLT.
                </p>
              </div>
            </Card>

            {/* Regional Performance Overview */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Regional Performance Overview
              </h2>

              <div className="space-y-4">
                <Card className="p-4 border card-interactive">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">Addis Ababa Region</h3>
                      <p className="text-sm text-muted-foreground">487 schools • 542,000 students</p>
                    </div>
                    <Badge className="bg-success/20 text-success border-success">
                      Excellent
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">92%</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">88.5</p>
                      <p className="text-xs text-muted-foreground">Avg. GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-success">-72%</p>
                      <p className="text-xs text-muted-foreground">Dropouts</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border card-interactive">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">Oromia Region</h3>
                      <p className="text-sm text-muted-foreground">2,134 schools • 1.2M students</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      Good
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">87%</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">82.3</p>
                      <p className="text-xs text-muted-foreground">Avg. GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-success">-65%</p>
                      <p className="text-xs text-muted-foreground">Dropouts</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border card-interactive">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">Amhara Region</h3>
                      <p className="text-sm text-muted-foreground">1,876 schools • 890,000 students</p>
                    </div>
                    <Badge variant="outline" className="text-warning border-warning">
                      Improving
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">80.1</p>
                      <p className="text-xs text-muted-foreground">Avg. GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-success">-58%</p>
                      <p className="text-xs text-muted-foreground">Dropouts</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All 11 Regions
              </Button>
            </Card>

            {/* System Alerts */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-warning" />
                National System Alerts
              </h2>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span className="font-semibold text-success">EMIS Submission Rate: 98.5%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    8,542 of 8,673 schools submitted monthly reports on time
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-warning" />
                    <span className="font-semibold text-warning">131 Schools Pending Verification</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    New schools requiring MoE authorization for FES access
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                This Quarter
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">System Uptime</span>
                    <span className="font-bold">99.8%</span>
                  </div>
                  <p className="text-xs text-success">Exceeded SLA target</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">New Credentials</span>
                    <span className="font-bold">82,450</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Degrees/certificates issued</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Verifications</span>
                    <span className="font-bold">125,670</span>
                  </div>
                  <p className="text-xs text-muted-foreground">By employers</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Fraud Attempts Blocked</span>
                    <span className="font-bold text-verified">2,847</span>
                  </div>
                  <p className="text-xs text-verified">100% prevention rate</p>
                </div>
              </div>
            </Card>

            {/* Program Impact */}
            <Card className="p-6 border-2 border-success/30 bg-success/5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Program Impact
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-background border">
                  <p className="text-sm font-medium mb-1">Teacher Time Saved</p>
                  <p className="text-2xl font-bold text-success">52%</p>
                  <p className="text-xs text-muted-foreground mt-1">vs. paper-based admin</p>
                </div>
                <div className="p-3 rounded-lg bg-background border">
                  <p className="text-sm font-medium mb-1">Student Retention</p>
                  <p className="text-2xl font-bold text-success">+68%</p>
                  <p className="text-xs text-muted-foreground mt-1">Early intervention success</p>
                </div>
                <div className="p-3 rounded-lg bg-background border">
                  <p className="text-sm font-medium mb-1">Fraud Elimination</p>
                  <p className="text-2xl font-bold text-verified">100%</p>
                  <p className="text-xs text-muted-foreground mt-1">Blockchain verification</p>
                </div>
              </div>
            </Card>

            {/* System Health */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Database Status</span>
                  <Badge className="bg-success/20 text-success border-success">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">DLT Sync Status</span>
                  <Badge className="bg-success/20 text-success border-success">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Synced
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">API Response</span>
                  <span className="font-bold text-sm">124ms</span>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Ministry Tools</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="mr-2 h-4 w-4" />
                  School Registry
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Authorize New Schools
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics Dashboard
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinisterDashboard;
