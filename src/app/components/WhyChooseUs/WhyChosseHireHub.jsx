import { Briefcase, Clock, DollarSign, Star } from "lucide-react";
import Image from "next/image";

const WhyChooseHireHub = () => {
  return (
    <section className="bg-white py-16 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose HireHub?</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Save Time & Resources</h4>
                <p className="text-gray-600">Automate tasks, streamline workflows, and reduce time spent on manual processes.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Star size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Improve Candidate Quality</h4>
                <p className="text-gray-600">Find and hire the best talent more effectively.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Briefcase size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Enhance Employer Branding</h4>
                <p className="text-gray-600">Attract top talent with a professional and user-friendly hiring platform.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Reduce Costs</h4>
                <p className="text-gray-600">Lower your recruitment costs by streamlining your hiring process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative">
          <Image
            src="/path-to-your-image.jpg"
            alt="Why Choose Us"
            width={360}
            height={280}
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute top-10 right-10 bg-white shadow-lg p-4 rounded-lg flex items-center space-x-3">
            <div className="text-blue-600 text-2xl font-bold">89%</div>
            <div>
              <h4 className="text-lg font-semibold">Success Stats</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHireHub;
