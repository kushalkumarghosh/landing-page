import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal, Riverside High School",
    content:
      "EduManage has transformed how we operate. The attendance tracking and parent communication features alone have saved us countless hours every week.",
    image: "/professional-woman-principal.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Administrator, Lincoln Academy",
    content:
      "The best investment we've made for our school. The platform is intuitive, powerful, and our teachers actually enjoy using it. Highly recommended!",
    image: "/professional-man-administrator.jpg",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, Oakwood Elementary",
    content:
      "Outstanding support and continuous improvements. EduManage understands education and it shows in every feature. Our efficiency has improved dramatically.",
    image: "/professional-woman-director.png",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by Educational Leaders
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            See what school administrators are saying about EduManage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-pretty leading-relaxed text-card-foreground">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="rounded-2xl border border-border bg-muted/50 p-8 sm:p-12">
            <h3 className="text-balance text-3xl font-bold text-foreground">Join 500+ Schools Using EduManage</h3>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Start your 30-day free trial today. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
