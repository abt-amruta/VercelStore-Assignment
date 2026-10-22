import {
  Copyright,
  Dot,
  EighthNote,
  Briefcase,
  ArrowRight,
  MessageCircleMore,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Adult Courses",
    content: [
      "Fiber",
      "Art",
      "Fashion",
      "Pottery",
      "Woodworking",
      "AllCourses",
    ],
  },
  {
    value: "item-2",
    trigger: "Kids and Juniors",
    content: [
      "Fiber",
      "Art",
      "Fashion",
      "Pottery",
      "Woodworking",
      "AllCourses",
    ],
  },
  {
    value: "Events",
    trigger: "What payment methods do you accept?",
    content: [
      "Fiber",
      "Art",
      "Fashion",
      "Pottery",
      "Woodworking",
      "AllCourses",
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#5400D6] text-white lg:mt-40 flex flex-col lg:px-20 w-screen max-[431]:w-screen md:py-10">
        {/* open roles box mobile */}
        <div className="min-[431]:hidden rounded-4xl m-5 w-95 mt-5 bg-violet-700 p-5 max-[391]:w-90">
          <div className="flex gap-4 justify-start items-center ">
            <MessageCircleMore className="text-indigo-800 bg-indigo-50 h-15 w-15 rounded-xl p-4" />
          </div>
          <div className="w-80 flex flex-col justify-start gap-2 rounded-b-4xl">
            <div className="py-3">
              <h1 className="text-3xl py-3 text-white">
                Not sure which course fits you?
              </h1>
              <h6 className="text-xl text-purple-300">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h6>
            </div>
            <div className="flex flex-col gap-4 w-full px-2">
              <button className="text-indigo-800 font-bold text-xl py-3 px-3 rounded-4xl flex items-center gap-3 bg-indigo-100 justify-center">
                View open roles
              </button>
              <button className="text-white text-xl py-3 px-3 rounded-4xl flex items-center gap-3 border border-indigo-400 justify-center">
                View open roles
              </button>
            </div>
          </div>
        </div>

        {/* career mobile  */}
        <div className="min-[431]:hidden rounded-4xl m-5 w-95 mt-5 bg-[#3f009e] p-5 max-[391]:w-90">
          <div className="flex gap-4 justify-start items-center ">
            <span>
              {" "}
              <Briefcase className="text-purple-300" />
            </span>
            <span className="text-purple-200 font-bold text-lg">CAREERS</span>
            <span className="text-white bg-fuchsia-500 py-0 px-2 rounded-4xl">
              {" "}
              we're hiring
            </span>
          </div>
          <div className="w-80 flex flex-col justify-start gap-2 rounded-b-4xl">
            <div className="py-3">
              <h1 className="text-3xl py-3 text-white">
                Teach what you love. Join our maker mentors.{" "}
              </h1>
              <h6 className="text-xl text-purple-300">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h6>
            </div>
            <div className="flex flex-col gap-4 w-fit px-1 ">
              <button className="text-white text-xl py-3 rounded-4xl shadow flex items-center gap-3">
                View open roles <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start lg:p-10 p-3 max-[431]:flex-col pl-5">
          <div className="flex flex-col lg:gap-5 items-start justify-start gap-3">
            <div>
              <span className="lg:text-3xl text-4xl font-bold">
                courseindoha
              </span>
            </div>
            <div>
              {" "}
              <h6 className="lg:text-xl text-lg lg:w-80 w-90 pr-2 max-[431]:text-lg text-purple-200">
                A makers school in Doha. Learn, connect and grow as a community
              </h6>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start max-[431]:py-8">
              {" "}
              <span>
                <EighthNote className="bg-indigo-700 p-3 h-15 w-15 md:h-10 md:w-10 text-indigo-100 rounded-[50%] border border-indigo-500" />
              </span>
              <span>
                <EighthNote className="bg-indigo-700 p-3 h-15 w-15 md:h-10 md:w-10 text-indigo-100 rounded-[50%] border border-indigo-500" />
              </span>
              <span>
                <EighthNote className="bg-indigo-700 p-3 h-15 w-15 md:h-10 md:w-10 text-indigo-100 rounded-[50%] border border-indigo-500" />
              </span>
              <span>
                <EighthNote className="bg-indigo-700 p-3 h-15 w-15 md:h-10 md:w-10 text-indigo-100 rounded-[50%] border border-indigo-500" />
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-30 items-start justify-start max-[431]:gap-5">
            <Accordion defaultValue={["item-1"]} className="max-w-lg">
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-indigo-100 text-xl flex justify-between w-90">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-flow-col grid-rows-3 gap-3 ">
                      {item.content.map((i, index) => (
                        <span key={index} className="text-lg">
                          {i}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-10 max-[431]:flex-wrap max-[431]:gap-5 md:flex-col">
          <div className="flex flex-row gap-10 text-xl max-[431]:gap-5 max-[431]:flex-col md:m-5">
            <h3 className="max-[431]:text-lg text-indigo-300">Terms</h3>
            <h3 className="flex gap-10 max-[431]:text-lg text-indigo-300">
              <Dot className="max-[431]:hidden" /> Privacy Policy
            </h3>
            <h3 className="flex gap-10 max-[431]:text-lg text-indigo-300">
              <Dot className="max-[431]:hidden" />
              House of Rules
            </h3>
            <div className="max-[431] flex flex-col gap-5 md:hidden">
              <h3 className="max-[431]:text-lg text-indigo-300">
                Cookie Policy
              </h3>
              <h3 className="max-[431]:text-lg text-indigo-300">
                Refund & Cancellation
              </h3>
              <h3 className="max-[431]:text-lg text-indigo-300">
                Safeguarding
              </h3>
              <h3 className="max-[431]:text-lg text-indigo-300">
                Accessibility
              </h3>
            </div>
          </div>
          <div className="text-xl flex gap-2 max-[431]:text-lg text-indigo-400">
            <Copyright />
            2026 courseindoha. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
