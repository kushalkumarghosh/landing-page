import { Calendar, Users, BarChart3, FileText, Bell, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Student & Staff Management",
    description: "Comprehensive profiles, enrollment tracking, and staff directory with role-based access control.",
  },
  {
    icon: Calendar,
    title: "Attendance Tracking",
    description: "Real-time attendance marking with automated notifications to parents and detailed reports.",
  },
  {
    icon: BarChart3,
    title: "Grade & Assessment",
    description: "Digital grade books, report card generation, and progress tracking with analytics.",
  },
  {
    icon: FileText,
    title: "Curriculum Planning",
    description: "Lesson planning tools, syllabus management, and assignment tracking for teachers.",
  },
  {
    icon: Bell,
    title: "Parent Communication",
    description: "Instant notifications, announcements, and two-way messaging between school and parents.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Bank-level encryption, FERPA compliance, and secure cloud storage for all school data.",
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything Your School Needs
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Powerful features designed to simplify school management and enhance learning outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-4xl font-bold text-foreground">85%</p>
                <p className="mt-2 text-sm text-muted-foreground">Time Saved on Admin Tasks</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-foreground">95%</p>
                <p className="mt-2 text-sm text-muted-foreground">Parent Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-foreground">40%</p>
                <p className="mt-2 text-sm text-muted-foreground">Improved Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
