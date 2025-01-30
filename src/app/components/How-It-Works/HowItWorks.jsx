"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Set up your company profile and job requirements",
    icon: <User className="w-8 h-8 text-primary" />,
    bgColor: "bg-indigo-500",
    width: "w-2/5",
  },
  {
    number: "02",
    title: "Post Job",
    description: "Share your job opening with our global talent pool",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    bgColor: "bg-emerald-500",
    width: "w-3/5",
  },
  {
    number: "03",
    title: "Review Candidates",
    description: "Evaluate pre-screened candidates that match your needs",
    icon: <Users className="w-8 h-8 text-primary" />,
    bgColor: "bg-violet-500",
    width: "w-4/5",
  },
  {
    number: "04",
    title: "Hire",
    description: "Select and hire the perfect candidate for your team",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    bgColor: "bg-teal-500",
    width: "w-full",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
      </div>
      <div className="relative flex flex-col space-y-3 px-4 sm:mx-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.5 }}
            className={`relative flex items-center ${step.width}`}
          >
            {/* Step Number and Text */}
            <div className={`flex-1 py-3 px-6 text-white font-semibold ${step.bgColor} text-lg rounded-r-lg shadow-lg`}> 
              <span className="text-lg font-bold mr-4">{step.number}</span>
              {step.title}
            </div>
            
            {/* Icon */}
            <div className="-ml-8 flex items-center justify-center w-16 h-16 bg-white shadow-lg border-2 rounded-xl transform rotate-45">
            <div className="flex items-center justify-center w-12 h-12 bg-white shadow-lg border-2 rounded-xl transform">
            <div className="transform -rotate-45">{step.icon}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;