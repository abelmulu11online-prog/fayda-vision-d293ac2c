import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  TrendingUp,
  FileText,
  AlertCircle,
  CheckCircle2,
  UserPlus,
  Settings,
  Download
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Administrator Portal</h1>
                <div className="verified-badge text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  MoE Authorized
                </div>
              </div>
              <p className="opacity-90">Addis Ababa University Preparatory School</p>
              <p className="text-sm opacity-80 mt-1">School Code: AAU-PREP-001 • Administrator ID: ADM-2024-123</p>
            </div>
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Export EMIS Report
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* School Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <p className="text-3xl font-bold mb-1">1,247</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-xs text-success mt-1">↑ +52 this year</p>
              </Card>

              <Card className="p-6 card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <p className="text-3xl font-bold mb-1">68</p>
                <p className="text-sm text-muted-foreground">Teaching Staff</p>
                <p className="text-xs text-muted-foreground mt-1">All verified</p>
              </Card>

              <Card className="p-6 card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-xs font-medium text-success">+8%</span>
                </div>
                <p className="text-3xl font-bold mb-1">87.3</p>
                <p className="text-sm text-muted-foreground">Avg. GPA</p>
                <p className="text-xs text-muted-foreground mt-1">Above national</p>
              </Card>

              <Card className="p-6 card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <span className="text-xs font-medium">-32%</span>
                </div>
                <p className="text-3xl font-bold mb-1">18</p>
                <p className="text-sm text-muted-foreground">At-Risk Students</p>
                <p className="text-xs text-success mt-1">Dropout reduced</p>
              </Card>
            </div>

            {/* Pending Administrative Requests */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Pending Administrative Requests
                </h2>
                <Badge variant="outline" className="text-warning border-warning">
                  12 Pending
                </Badge>
              </div>

              <div className="space-y-4">
                <Card className="p-4 border-2 border-primary/20 card-interactive">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">Teacher Account Creation Request</h3>
                      <p className="text-sm text-muted-foreground">
                        New teacher: Solomon Haile • MoE ID: TCH-2024-998 • Mathematics Department
                      </p>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      <CheckCircle2 className="mr-1 h-4 w-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">Review Details</Button>
                  </div>
                </Card>

                <Card className="p-4 border card-interactive">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">Student Transfer Request</h3>
                      <p className="text-sm text-muted-foreground">
                        Student: Marta Bekele (Grade 10) • Transfer from: Bole High School
                      </p>
                    </div>
                    <Badge variant="outline">2 days ago</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      <CheckCircle2 className="mr-1 h-4 w-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">Review Documents</Button>
                  </div>
                </Card>

                <Card className="p-4 border card-interactive">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">Parent Access Authorization</h3>
                      <p className="text-sm text-muted-foreground">
                        Guardian: Alemitu Tadesse • Student: Henok Tadesse (Grade 9)
                      </p>
                    </div>
                    <Badge variant="outline">5 days ago</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      <CheckCircle2 className="mr-1 h-4 w-4" />
                      Grant Access
                    </Button>
                    <Button size="sm" variant="outline">Verify Relationship</Button>
                  </div>
                </Card>
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Requests (12)
              </Button>
            </Card>

            {/* EMIS Compliance & Reporting */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                EMIS Compliance & Reporting
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Monthly Report Submitted</span>
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      On Time
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    November 2024 data successfully transmitted to MoE • Submitted: Dec 1, 2024
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-warning" />
                      <span className="font-semibold text-warning">December Report Due Soon</span>
                    </div>
                    <Badge variant="outline" className="text-warning border-warning">
                      Due: Dec 31
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Automated data collection in progress • 89% complete
                  </p>
                  <Button size="sm" variant="outline">
                    Preview Draft Report
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Current Data
                  </Button>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure Auto-Report
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alarm Bell System Overview */}
            <Card className="p-6 border-2 border-warning/30 bg-warning/5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                School-Wide Alerts
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Interventions</span>
                    <span className="font-bold text-lg">18</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Across all grades</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Parent Meetings Scheduled</span>
                    <span className="font-bold text-lg">7</span>
                  </div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-bold text-lg text-success">72%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Students improved after intervention</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Alerts
              </Button>
            </Card>

            {/* Teacher Management */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Teacher Management
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Active Teachers</span>
                    <span className="font-bold">68</span>
                  </div>
                  <p className="text-xs text-success">All Fayda ID verified</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Pending Access</span>
                    <span className="font-bold">2</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Awaiting approval</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Teacher Account
              </Button>
            </Card>

            {/* School Configuration */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                School Settings
              </h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Academic Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Fee Payment Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="mr-2 h-4 w-4" />
                  School Profile
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">New Enrollments</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Transfers Out</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Attendance</span>
                  <span className="font-bold">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Parent Engagement</span>
                  <span className="font-bold text-success">High</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
