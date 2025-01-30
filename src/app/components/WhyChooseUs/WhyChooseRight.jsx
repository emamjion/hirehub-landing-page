import Image from "next/image";
import chooseUs from "../../../../public/chooseus.jpg";

const WhyChooseRight = () => {
  return (
    <div className="relative">
      <Image
        src={chooseUs}
        alt="Why Choose Us"
        width={360}
        height={280}
        className="rounded-lg w-full"
      />
      {/* <div className="absolute top-10 right-10 bg-white shadow-lg p-4 rounded-lg flex items-center space-x-3">
                    <div className="text-blue-600 text-2xl font-bold">89%</div>
                    <div>
                      <h4 className="text-lg font-semibold">Success Stats</h4>
                      <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div> */}
    </div>
  );
};

export default WhyChooseRight;
