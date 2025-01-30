import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    reviewer: "Alice Johnson",
    designation: "Software Engineer",
    username: "@alice",
    comment: "Great work environment and amazing team culture! I highly recommend working here.",
    img: "/blog_avatar.jpg",
    company: "Tech Innovators Inc.",
  },
  {
    reviewer: "Michael Smith",
    designation: "Project Manager",
    username: "@michael",
    comment: "Supportive leadership and great career growth opportunities. Love the flexibility!",
    img: "/blog_avatar.jpg",
    company: "NextGen Solutions",
  },
  {
    reviewer: "Sophia Brown",
    designation: "HR Manager",
    username: "@sophia",
    comment: "Work-life balance is fantastic! The company truly values its employees' well-being.",
    img: "/blog_avatar.jpg",
    company: "FutureTech Corp.",
  },
  {
    reviewer: "David Lee",
    designation: "Data Scientist",
    username: "@david",
    comment: "Competitive salary and fantastic perks! Would definitely recommend.",
    img: "/blog_avatar.jpg",
    company: "AI Dynamics Ltd.",
  },
  {
    reviewer: "Emily Carter",
    designation: "UX Designer",
    username: "@emily",
    comment: "A highly innovative company with a positive and inclusive work culture!",
    img: "/blog_avatar.jpg",
    company: "Quantum Software",
  },
];

const ReviewCard = ({ img, reviewer, designation, username, comment, company }) => {
  return (
    <figure
      className={cn(
        "relative w-72 sm:w-80 md:w-96 cursor-pointer overflow-hidden rounded-xl border p-5",
        "border-gray-200 bg-white shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          width="80"
          height="80"
          alt={reviewer}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {reviewer}
          </figcaption>
          <p className="text-xs text-gray-600 dark:text-gray-400">{designation}</p>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <h3 className="mt-3 text-base font-semibold text-gray-800 dark:text-gray-300">
        {company}
      </h3>
      <blockquote
        className="mt-2 text-sm text-gray-700 dark:text-gray-400 transition-all duration-200"
        title={comment}
      >
        {comment}
      </blockquote>
    </figure>
  );
};

export function Blogs() {
  return (
    <section className="py-10 px-4" id="blog">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Employee & Client Reviews
        </h2>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center rounded-lg overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] flex gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-gray-900"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-gray-900"></div>
      </div>
    </section>
  );
}