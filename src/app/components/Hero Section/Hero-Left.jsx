import HeroImage from "./HeroImage";

const HeroLeft = () => {
  return (
    <div className="relative">
      <div className="absolute -bottom-5 left-20 w-4 h-4 bg-red-500 rounded-full"></div>
      <div className="absolute bottom-6 right-20 w-6 h-6 bg-green-500 rounded-full"></div>
      <div className="absolute top-20 left-8 w-5 h-5 bg-yellow-500 rounded-full"></div>

      <HeroImage />
    </div>
  );
};

export default HeroLeft;
