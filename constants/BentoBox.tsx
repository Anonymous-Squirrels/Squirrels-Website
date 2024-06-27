import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export const BentoItems = [
  {
    title: "Custom Pricing",
    description: `Fixed pricing and high ppw custom pricing and lowest charges in segment.`,
    content: (
      <Image
        src="/assets/graph.png"
        width={250}
        height={250}
        alt="graph"
        className="h-48 w-48 md:w-[300px] md:h-[300px]"
      />
    ),
  },
  {
    title: `Boosting Business. Today and Tomorrow.`,
    description:
      "Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.",
    content: (
      <Image
        src="/assets/boost_business.png"
        width={400}
        height={400}
        className="rounded-xl"
        alt="boost_business"
      />
    ),
  },
  {
    title: "Easy Collaboration",
    description:
      "Seamlessly collaborate with your team members like never before.",
    content: (
      <Image
        src="/assets/collaboration.png"
        width={180}
        height={180}
        alt="collaboration"
        className={"h-92 w-92"}
      />
    ),
  },
  {
    title: "Some of our Work.",
    description:
      "Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. We manage it all !!",
    content: (
      <div className="w-fit h-fit">
        <Link href="/project">
          <Button
            variant="light"
            className="rounded-2xl py-0 font-medium px-6 md:py-1 md:px-10"
          >
            View More
          </Button>
        </Link>
        <div className="flex items-end justify-between w-fit">
          <Image
            src="/assets/oyoOfficial.png"
            width={200}
            height={200}
            alt="Oyo"
            className="h-20 md:h-fit border mt-10"
          />

          <Image src="/assets/leo9.png" width={200} height={200} alt="Leo 9" className={"w-40 h-40 md:w-fit md:h-fit "}/>
        </div>
      </div>
    ),
  },

  {
    title: "We provide Services. A lot of services.",
    description:
      "Our Company provides a lot of services ranging from Brand strategies to SEO Optimization to Web Content Management",
    content: (
      <Link href="/services">
        <Button
          variant="light"
          className="rounded-full py-3 px-6 md:mt-16 md:px-10 font-medium"
        >
          View our services
        </Button>
      </Link>
    ),
  },
];
