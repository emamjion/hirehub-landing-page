import WhyChooseLeft from "./WhyChooseLeft";
import WhyChooseRight from "./WhyChooseRight";

const WhyChooseHireHub = () => {
  return (
    <section className="py-8 sm:py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-0">
        <WhyChooseLeft />
        <WhyChooseRight />
      </div>
    </section>
  );
};

export default WhyChooseHireHub;

