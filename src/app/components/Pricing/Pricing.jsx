import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    period: "per month/user",
    description: "Good for individuals who are just starting out and simply want the essentials.",
    features: [
        "Organization Dashboard",
      "Limited job postings",
      "Limited CV downloads",
      "Access to core features (job posting, application tracking)",
      "Basic Scheduling",
      "Social Media Share",

    ],
    gradient: "from-[#FBE8E5] to-white",
    texture: "texture-dots",
  },
  {
    title: "Standard",
    price: "$30",
    period: "per month/user",
    description: "Highly recommended for small organizations who seek to upgrade their teams & performance.",
    features: [
      "Organization Dashboard with Report",
      "Unlimited job postings",
      "Unlimited CV downloads",
      "Customizable Pipeline",
      "Calendar / Event / Schedule - all access",
      "Social Media Share",
    ],
    gradient: "from-[#E6EAF8] to-white",
    texture: "texture-dots",
    badge: "Recommended",
  },
  {
    title: "Enterprise",
    price: "$5k",
    period: "per year",
    description: "Robust plan for larger organizations looking to have more control, priviledges & security.",
    features: [
      "Unlimited job postings",
      "Organization workflows",
      "Unlimited CV downloads",
      "Advanced analytics and reporting",
      "AI based exam",
      "Priority supports",
      "Meeting link create & Share",
      "CV parsing and scoring",
      "All basic included",
    ],
    gradient: "from-[#E8F3F3] to-white",
    texture: "texture-dots",
  },
];

export default function PricingSection() {
  return (
    <div className="py-8 sm:py-10 px-4 md:px-12 lg:px-16 text-center" id="pricing">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
      Choose the Plan That&apos;s Right for You
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
        Discover a variety of our advanced features. Free, Standard and Enterprize for individuals.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative p-6 pt-2 rounded-xl bg-gradient-to-b ${plan.gradient} shadow-lg overflow-hidden`}
          >
            {plan.badge && (
              <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            {/* used textures and dot gradient */}
            <div
              className={`absolute inset-0 ${plan.texture} opacity-40 mask-gradient`}
            ></div>
            <CardContent className="p-4">
              <CardHeader className="bg-transparent p-4">
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.title}</CardTitle>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-400">{plan.period}</p>
              </CardHeader>
              <p className="text-sm text-gray-700 dark:text-gray-300">{plan.description}</p>
              <Button className="mt-4 w-full bg-slate-800 text-white hover:!bg-gray-800 !cursor-pointer">Select Plan</Button>
              <ul className="mt-6 text-left space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}