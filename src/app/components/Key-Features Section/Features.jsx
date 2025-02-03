import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Briefcase, Calendar, Users } from "lucide-react";

const features = [
  {
    title: "Effortless Job Posting",
    icon: <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-slate-600" />,
    details: [
      "Post unlimited jobs with the Pro plan.",
      "Easily create and publish job postings with just a few clicks.",
      "Reach a wider audience with targeted job distribution.",
      "Track your job postings and monitor applications.",
    ],
  },
  {
    title: "Powerful Candidate Screening",
    icon: <Users className="w-8 sm:w-10 h-8 sm:h-10 text-slate-600" />,
    details: [
      "Download applicant CVs with ease.",
      "Quickly review resumes.",
      "Use advanced filters to find the most qualified candidates.",
      "Shortlist and track candidates throughout the hiring process.",
    ],
  },
  {
    title: "Streamlined Interview Scheduling",
    icon: <Calendar className="w-8 sm:w-10 h-8 sm:h-10 text-slate-600" />,
    details: [
      "Schedule and manage interviews with ease.",
      "Send automated interview reminders to candidates.",
      "Track interview feedback and make informed hiring decisions.",
    ],
  },
  {
    title: "Data-Driven Insights",
    icon: <BarChart className="w-8 sm:w-10 h-8 sm:h-10 text-slate-600" />,
    details: [
      "Advanced analytics and reporting features available.",
      "Track key recruitment metrics, such as time-to-hire and cost-per-hire.",
      "Generate insightful reports to improve your hiring strategy.",
    ],
  },
];

const Features = () => {
  return (
    <section className="py-8 sm:py-10" id="features">
      <div className="max-w-5xl mx-auto text-center mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Key Features
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-md border border-border rounded-xl bg-background"
          >
            <CardHeader className="flex flex-row items-center gap-3 ">
              {feature.icon}
              <CardTitle className="text-base font-semibold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                {feature.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
