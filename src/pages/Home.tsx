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
  Smartphone
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
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Features</span> that go beyond expectations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering education with Fayda e-School's cutting-edge tools and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <Card className="p-6">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" alt="Grades and absences" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <h3 className="font-semibold mb-2">Grades & absences</h3>
              <p className="text-sm text-muted-foreground">
                Students can stay on top of their academic progress with convenient grades and absences tracker, empowering them to effortlessly monitor their performance and attendance.
              </p>
            </Card>

            <Card className="p-6">
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop" alt="Journal overview" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <h3 className="font-semibold mb-2">Journal overview</h3>
              <p className="text-sm text-muted-foreground">
                Teachers can easily access class rosters, subject assignments, scheduling details, lesson plans, and student information, all in a single, user-friendly interface.
              </p>
            </Card>

            <Card className="p-6">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop" alt="Student homework" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <h3 className="font-semibold mb-2">Student homework</h3>
              <p className="text-sm text-muted-foreground">
                Students can stay organized, manage assignments, submit tasks online and efficiently track their progress on homework, ensuring academic success with ease.
              </p>
            </Card>

            <Card className="p-6">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop" alt="Student lessons" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <h3 className="font-semibold mb-2">Student lessons</h3>
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

      {/* Package Comparison Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Compare <span className="text-primary">packages</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your educational institution
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold bg-muted/30">Base package</th>
                  <th className="text-center p-4 font-semibold bg-primary/5">Standard package</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-sm">{feature.name}</td>
                    <td className="p-4 text-center bg-muted/10">
                      {feature.base ? (
                        <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      {feature.standard ? (
                        <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
