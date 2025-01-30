import WhyChooseLeft from "./WhyChooseLeft";
import WhyChooseRight from "./WhyChooseRight";

const WhyChooseHireHub = () => {
  return (
    <section className="bg-white py-16 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <WhyChooseLeft />
        <WhyChooseRight />
      </div>
    </section>
  );
};

export default WhyChooseHireHub;

