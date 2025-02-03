import { Briefcase, Clock, DollarSign, Star } from "lucide-react";
const WhyChooseLeft = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-start">
        Why Choose HireHub?
      </h2>
      <div className="space-y-6">
        <div className="flex space-x-3">
          <div className="">
            <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-slate-500" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold">
              Save Time & Resources
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Automate tasks, streamline workflows, and reduce time spent on
              manual processes.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <span>
            <Star className="w-6 sm:w-8 h-6 sm:h-8 text-slate-500" />
          </span>
          <div>
            <h4 className="text-base md:text-lg font-semibold">
              Improve Candidate Quality
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Find and hire the best talent more effectively.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="">
            <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-slate-500" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold">
              Enhance Employer Branding
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Attract top talent with a professional and user-friendly hiring
              platform.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="">
            <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 text-slate-500" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold">Reduce Costs</h4>
            <p className="text-gray-600 text-sm md:text-base">
              Lower your recruitment costs by streamlining your hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLeft;
