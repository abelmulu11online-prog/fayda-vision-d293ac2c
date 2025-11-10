import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  X,
  FileText,
  Calendar,
  Users,
  MessageSquare,
  Bell,
  TrendingUp,
  Shield,
  BookOpen,
  ClipboardCheck,
  Award,
  Smartphone,
  ChevronRight,
  School
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const comparisonFeatures = [
    { name: "School and classroom management", base: true, standard: true },
    { name: "Study book", base: true, standard: true },
    { name: "Attachment of files and lesson types to lesson descriptions", base: true, standard: true },
    { name: "Timetable management", base: true, standard: true },
    { name: "Discipline-related issue management", base: true, standard: true },
    { name: "Student-submitted homework displayed by name", base: true, standard: true },
    { name: "Point-based assessment", base: true, standard: true },
    { name: "Formative (verbal) assessment report", base: true, standard: true },
    { name: "Messaging application", base: true, standard: true },
    { name: "eKool mobile application", base: true, standard: true },
    { name: "Consent management", base: true, standard: true },
    { name: "Polling system", base: true, standard: true },
    { name: "Development interviews", base: true, standard: true },
    { name: "Development cards", base: true, standard: true },
    { name: "Integration with EHIS", base: true, standard: true },
    { name: "Integration with Untis", base: true, standard: true },
    { name: "Integration with school card system", base: true, standard: true },
    { name: "Integration with Opiq", base: true, standard: true },
    { name: "Integration with RIKS", base: true, standard: true },
    { name: "Integration with ELIIS", base: true, standard: true },
    { name: "File upload capacity up to 100MB", base: true, standard: true },
    { name: "Customer support with a response time within 48 hours", base: true, standard: true },
    { name: "Alarm bell", base: false, standard: true },
    { name: "Learning outcomes portfolio", base: false, standard: true },
    { name: "Student choices in curriculum", base: false, standard: true },
    { name: "School event registration", base: false, standard: true },
    { name: "File upload capacity up to 200MB", base: false, standard: true },
    { name: "Priority customer support with a response time within 24 hours", base: false, standard: true },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-6">
              Want to register your school? <Link to="/login" className="text-primary hover:underline">Contact sales</Link>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fayda e-School is the ultimate <span className="text-primary">educational platform</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Meant for schools, parents, and students seeking an all-in-one solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Demo for schools
                </Button>
              </Link>
              <Link to="/how-to">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image and Stats */}
          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="hidden lg:block">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Students using platform" className="rounded-lg shadow-lg w-80 h-64 object-cover" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-muted-foreground mb-2">Available on</p>
                <div className="flex gap-4 justify-center lg:justify-start mb-6">
                  <Smartphone className="h-8 w-8 text-muted-foreground" />
                  <BookOpen className="h-8 w-8 text-muted-foreground" />
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop" alt="Teacher with tablet" className="rounded-lg shadow-lg w-64 h-48 object-cover mx-auto lg:mx-0" />
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">420,268,788</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <FileText className="h-4 w-4" />
                  Grades in total
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">62,968,067</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <ClipboardCheck className="h-4 w-4" />
                  Assignments added
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">97,626,848</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Lessons in total
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">56,842,557</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Messages exchanged
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Features</span> that go beyond expectations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering education with Fayda e-School's cutting-edge tools and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <Card className="p-6 hover-scale hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Grades and absences" className="rounded-lg mb-4 w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Grades & absences</h3>
              <p className="text-sm text-muted-foreground">
                Students can stay on top of their academic progress with convenient grades and absences tracker, empowering them to effortlessly monitor their performance and attendance.
              </p>
            </Card>

            <Card className="p-6 hover-scale hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop" alt="Journal overview" className="rounded-lg mb-4 w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Journal overview</h3>
              <p className="text-sm text-muted-foreground">
                Teachers can easily access class rosters, subject assignments, scheduling details, lesson plans, and student information, all in a single, user-friendly interface.
              </p>
            </Card>

            <Card className="p-6 hover-scale hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop" alt="Student homework" className="rounded-lg mb-4 w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Student homework</h3>
              <p className="text-sm text-muted-foreground">
                Students can stay organized, manage assignments, submit tasks online and efficiently track their progress on homework, ensuring academic success with ease.
              </p>
            </Card>

            <Card className="p-6 hover-scale hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop" alt="Student lessons" className="rounded-lg mb-4 w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Student lessons</h3>
              <p className="text-sm text-muted-foreground">
                Students can have a deeper understanding of each lesson through detailed overviews, lesson plans and class materials, giving them all the necessary resources to excel in their studies.
              </p>
            </Card>
          </div>

          {/* Additional Features List */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-8">
              Explore further: Uncover an array of additional features and benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <Bell className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Notifications & notes</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep teachers, students, and parents in the loop with timely notifications about important deadlines, upcoming events, grade updates, and new messages.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Alarm bell</h4>
                  <p className="text-sm text-muted-foreground">
                    Empowers teachers to identify and promptly address study problems in students, enabling timely intervention and personalized assistance.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Consent management</h4>
                  <p className="text-sm text-muted-foreground">
                    Parents can grant or deny permissions for the processing of their child's personal data or for specific activities.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Course choices & optional courses</h4>
                  <p className="text-sm text-muted-foreground">
                    Students can explore a wide range of course options, select their preferred classes, and expand their knowledge in areas of personal interest.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Learning outcomes</h4>
                  <p className="text-sm text-muted-foreground">
                    Students gain a comprehensive understanding of the knowledge and skills they will acquire in each lesson, aligning their learning goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Event registration</h4>
                  <p className="text-sm text-muted-foreground">
                    Students can discover school events, workshops, extracurricular activities and sports, effortlessly sign up, and ensure their spot.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Messaging app</h4>
                  <p className="text-sm text-muted-foreground">
                    Enables teachers, students, and parents to stay connected, exchange important updates, share resources, and build a strong educational partnership.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Deep integrations</h4>
                  <p className="text-sm text-muted-foreground">
                    Schools can connect tools like Opiq, Eklass, and Untis to eKool platform, leveraging the combined benefits of these integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How it benefits <span className="text-primary">everyone</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fayda e-School transforms education for students, parents, teachers, and administrators alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover-scale hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Track grades, attendance, and assignments in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Access digital learning materials anytime, anywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Build verified digital portfolios for career opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Receive early intervention support when needed</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-scale hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Parents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Monitor your child's academic progress in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Pay school fees securely via mobile money (Telebirr/M-Pesa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Communicate directly with teachers and administrators</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Stay informed with instant notifications and updates</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-scale hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <ClipboardCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Schools</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Reduce administrative workload by 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Eliminate academic fraud with blockchain verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Seamless EMIS integration for national reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Reduce student dropout rates by up to 80%</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Deeply <span className="text-primary">integrated</span> & highly trusted
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fayda e-School seamlessly connects with Ethiopia's national digital infrastructure and leading educational platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-6 flex flex-col items-center justify-center hover-scale hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-center">Fayda Digital ID</p>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center hover-scale hover:shadow-lg transition-all duration-300 group">
              <FileText className="h-12 w-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-center">National EMIS</p>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center hover-scale hover:shadow-lg transition-all duration-300 group">
              <Smartphone className="h-12 w-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-center">Telebirr/M-Pesa</p>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center hover-scale hover:shadow-lg transition-all duration-300 group">
              <TrendingUp className="h-12 w-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-center">EduChain DLT</p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">
              Our platform is built on Ethiopia's Digital Public Infrastructure, ensuring secure authentication, 
              seamless financial transactions, and blockchain-verified credentials that employers trust.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-primary">educators</span> nationwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Fayda e-School is transforming education across Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover-scale hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Dr. Abebe Tadesse</p>
                  <p className="text-sm text-muted-foreground">Principal, Addis International School</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                "Fayda e-School reduced our administrative burden by over 50%. Teachers now spend more time teaching 
                and less time on paperwork. The blockchain verification feature has completely eliminated credential fraud."
              </p>
            </Card>

            <Card className="p-6 hover-scale hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Tigist Hailu</p>
                  <p className="text-sm text-muted-foreground">Parent, Mekelle</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                "I can now monitor my daughter's progress in real-time and pay school fees instantly via Telebirr. 
                The platform keeps me connected to her education like never before. Truly revolutionary!"
              </p>
            </Card>

            <Card className="p-6 hover-scale hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Yohannes Bekele</p>
                  <p className="text-sm text-muted-foreground">Teacher, Bahir Dar University</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                "The Alarm Bell system helps me identify at-risk students early. I've seen dropout rates decline 
                dramatically since we started using FES. It's making a real difference in students' lives."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Comparison Section */}
      <section id="packages" className="py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Compare <span className="text-primary">packages</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your educational institution
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Base Package */}
            <Card className="relative overflow-hidden hover-scale hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/50">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <School className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary" className="text-sm">Essential</Badge>
                </div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">Base Package</h3>
                  <p className="text-muted-foreground">Core administrative functions, essential communication, and mandatory financial inclusion tools for efficient school management.</p>
                </div>
                
                <div className="mb-8 p-4 bg-muted/30 rounded-lg">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>School & classroom management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Digital fee payment (Telebirr/M-Pesa)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Basic EMIS integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>48-hour customer support</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link to="/login">
                    <Button className="w-full group-hover:scale-105 transition-transform" size="lg" variant="outline">
                      Get Started
                    </Button>
                  </Link>
                  <Button 
                    className="w-full" 
                    variant="ghost"
                    onClick={() => document.getElementById('feature-comparison')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See All Features
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            </Card>

            {/* National Package */}
            <Card className="relative overflow-hidden border-2 border-primary hover-scale hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-primary/5 to-background">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-primary-foreground shadow-lg">Most Popular</Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Award className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <Badge className="text-sm">Advanced</Badge>
                </div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">National Package</h3>
                  <p className="text-muted-foreground">All Base features plus blockchain verification, Alarm Bell early intervention system, and advanced tools for maximum educational impact.</p>
                </div>
                
                <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="font-semibold">All Base Package features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Blockchain credential verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Alarm Bell early intervention system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Priority 24-hour support</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link to="/login">
                    <Button className="w-full group-hover:scale-105 transition-transform shadow-lg" size="lg">
                      Get Started
                    </Button>
                  </Link>
                  <Button 
                    className="w-full" 
                    variant="ghost"
                    onClick={() => document.getElementById('feature-comparison')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See All Features
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <div id="feature-comparison" className="scroll-mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Feature Comparison</h3>
            <div className="overflow-x-auto bg-background rounded-lg shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-semibold">Feature Details</th>
                    <th className="text-center p-4 font-semibold bg-muted/30">Base Package</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">National Package</th>
                  </tr>
                </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30 transition-colors duration-200">
                    <td className="p-4 text-sm font-medium">{feature.name}</td>
                    <td className="p-4 text-center bg-muted/10">
                      {feature.base ? (
                        <CheckCircle2 className="h-5 w-5 text-success mx-auto animate-scale-in" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      {feature.standard ? (
                        <CheckCircle2 className="h-5 w-5 text-success mx-auto animate-scale-in" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/login">
              <Button size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of schools, parents, and students on Ethiopia's premier digital education platform.
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
                  View Guides
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
