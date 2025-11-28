import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "99",
    description: "Perfect for small schools and academies",
    features: [
      "Up to 200 students",
      "Student & staff management",
      "Attendance tracking",
      "Basic reporting",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "249",
    description: "Ideal for growing schools",
    features: [
      "Up to 1,000 students",
      "Everything in Basic",
      "Grade & assessment tools",
      "Parent communication portal",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large institutions and districts",
    features: [
      "Unlimited students",
      "Everything in Professional",
      "Multi-campus management",
      "API access",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "On-premise option",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose the plan that fits your school's needs. All plans include a 30-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border bg-card ${plan.popular ? "border-2 border-primary shadow-xl" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold text-card-foreground">Contact Us</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-card-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-muted-foreground">
            All plans include free updates and security patches. Need a custom solution?{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
