import { Briefcase, Clock, DollarSign, Star } from "lucide-react";
const WhyChooseLeft = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Why Choose HireHub?</h2>
      <div className="space-y-6">
        <div className="flex space-x-3">
          <div className="">
            <Clock size={36} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Save Time & Resources</h4>
            <p className="text-gray-600">
              Automate tasks, streamline workflows, and reduce time spent on
              manual processes.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="">
            <Star size={36} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Improve Candidate Quality</h4>
            <p className="text-gray-600">
              Find and hire the best talent more effectively.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="">
            <Briefcase size={36} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Enhance Employer Branding</h4>
            <p className="text-gray-600">
              Attract top talent with a professional and user-friendly hiring
              platform.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="">
            <DollarSign size={36} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Reduce Costs</h4>
            <p className="text-gray-600">
              Lower your recruitment costs by streamlining your hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLeft;
