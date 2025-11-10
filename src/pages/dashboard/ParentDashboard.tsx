import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageFeatures, PackageType } from "@/components/PackageFeatures";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Users, 
  TrendingUp, 
  AlertCircle,
  Wallet,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Phone,
  CreditCard,
  Download
} from "lucide-react";

const ParentDashboard = () => {
  const { toast } = useToast();
  const [currentPackage] = useState<PackageType>("national");
  
  const handlePayment = (method: string) => {
    toast({
      title: "Payment Initiated",
      description: `Connecting to ${method} payment gateway...`,
    });
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "School fees payment completed successfully!",
      });
    }, 2000);
  };

  const handleDownloadReceipt = () => {
    toast({
      title: "Downloading Receipt",
      description: "Payment receipt is being prepared.",
    });
  };
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Meron Tadesse</h1>
                <div className="verified-badge text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Fayda ID Verified
                </div>
              </div>
              <p className="opacity-90">Parent Account • 2 Children Enrolled</p>
              <p className="text-sm opacity-80 mt-1">Fayda ID: FID-1122334455</p>
            </div>
            <Button variant="secondary" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Message Teachers
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Children Selector */}
        <Tabs defaultValue="child1" className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="child1">Abebe (Grade 12)</TabsTrigger>
            <TabsTrigger value="child2">Sara (Grade 8)</TabsTrigger>
          </TabsList>

          <TabsContent value="child1" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Academic Overview */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Academic Progress - Abebe Kebede
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Current GPA</p>
                      <p className="text-2xl font-bold">3.85</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                      <p className="text-2xl font-bold">96%</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Assignments</p>
                      <p className="text-2xl font-bold">18/20</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Rank</p>
                      <p className="text-2xl font-bold">5th</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Mathematics</span>
                        <span className="font-semibold">92/100</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Physics</span>
                        <span className="font-semibold">88/100</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">English</span>
                        <span className="font-semibold">94/100</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Chemistry</span>
                        <span className="font-semibold">85/100</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </Card>

                {/* School Fee Payment (Private School) */}
                <Card className="p-6 border-2 border-secondary/30">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-secondary" />
                    School Fee Payments
                  </h2>

                  <div className="p-5 rounded-lg bg-muted/50 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Outstanding Balance</p>
                        <p className="text-3xl font-bold">12,500 ETB</p>
                      </div>
                      <Badge variant="outline" className="text-warning border-warning">
                        Payment Due
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Semester 2 Fees • Due Date: December 31, 2024
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="font-medium text-sm mb-3">Select Payment Method:</p>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-auto py-4 hover-scale transition-all"
                      onClick={() => handlePayment("Telebirr")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Telebirr</p>
                          <p className="text-xs text-muted-foreground">Pay via mobile money</p>
                        </div>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-auto py-4 hover-scale transition-all"
                      onClick={() => handlePayment("M-Pesa")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">M-Pesa</p>
                          <p className="text-xs text-muted-foreground">Pay via mobile wallet</p>
                        </div>
                      </div>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full"
                      onClick={handleDownloadReceipt}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Previous Receipts
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30 border text-sm">
                    <p className="font-medium mb-2">Administrative Support:</p>
                    <p className="text-muted-foreground">
                      For payment inquiries, contact the school bursar at bursar@aauprep.edu.et 
                      or call +251-11-123-4567
                    </p>
                  </div>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Excellent Physics Lab Report</p>
                        <p className="text-sm text-muted-foreground">Teacher feedback received • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">New Assignment Posted</p>
                        <p className="text-sm text-muted-foreground">Mathematics: Problem Set #12 • Yesterday</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Alarm Bell Alerts */}
                <Card className="p-6 border-2 border-warning/30 bg-warning/5">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-warning" />
                    Early Intervention
                  </h3>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="font-medium text-success text-sm mb-2">All Clear!</p>
                    <p className="text-xs text-muted-foreground">
                      No academic risk alerts. Your child is performing well across all subjects.
                    </p>
                  </div>
                </Card>

                {/* Attendance Summary */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Attendance (This Month)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Present</span>
                      <span className="font-bold">18 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Absent</span>
                      <span className="font-bold">1 day</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Late</span>
                      <span className="font-bold">0 days</span>
                    </div>
                  </div>
                  <Progress value={95} className="h-2 mt-4" />
                  <p className="text-xs text-center text-muted-foreground mt-2">95% attendance rate</p>
                </Card>

                {/* Upcoming Events */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="font-medium text-sm">Parent-Teacher Meeting</p>
                      <p className="text-xs text-muted-foreground mt-1">December 18, 4:00 PM</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-sm">Semester Break</p>
                      <p className="text-xs text-muted-foreground mt-1">Starts December 23</p>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover-scale transition-all"
                      onClick={() => toast({ title: "Absence Notice", description: "Opening absence notification form..." })}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Absence Notice
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover-scale transition-all"
                      onClick={() => toast({ title: "Schedule Conference", description: "Opening conference scheduler..." })}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Conference
                    </Button>
                  </div>
                </Card>

                {/* Package Features */}
                <Card className="p-6">
                  <PackageFeatures currentPackage={currentPackage} />
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="child2" className="mt-6">
            <Card className="p-12 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Sara Kebede - Grade 8</h3>
              <p className="text-muted-foreground">
                Similar dashboard structure for second child would appear here with their specific academic data and payment status.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;
