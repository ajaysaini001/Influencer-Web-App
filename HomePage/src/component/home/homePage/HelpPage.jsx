import React from "react";
import { FaStar } from "react-icons/fa";
const helps = [
  {
    title: "Advance Analysis",
    icon: <FaStar size={22} className="text-cyan-500 bg-transparent" />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui molli",
  },
  {
    title: "Advance Analysis",
    icon: <FaStar size={22} className="text-cyan-500 bg-transparent" />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui molli",
  },
  {
    title: "Advance Analysis",
    icon: <FaStar size={22} className="text-cyan-500 bg-transparent" />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui molli",
  },
];
const HelpPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 md:p-20">
      <div className="w-full md:w-1/2">
        <div className="">
          <h1 className="text-xl md:text-3xl font-bold font-sans w-96 ">Influencers Can Help You Grow Your Brand Globally</h1>
          <p className="mt-5 w-80 md:w-96 font-sans">
            Maecenas nec odio etante tincidunt tempus. Donec vitae sapien libero
            venenatis faucibus
          </p>
        </div>
        <div className="flex flex-col gap-7 mt-8">
          {
          helps?.map((item, index) => (
            <div key={index} className="flex justify-center gap-5 ">
              <div className="w-[45px] h-[45px] rounded-md bg-sky-100 flex flex-col items-center justify-center">
                  {item.icon}
              </div>
              <div className="">
                <h2 className="font-sans text-base font-semibold">{item.title}</h2>
                <p className="font-sans w-72 mt-3 font-thin">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
       {/* right */}
       <div className="w-full md:w-1/2 m-auto mt-10 md:mt-0 md:m-0">
          <img
            src="https://preview.wstacks.com/influencerfly/assets/images/frontend/about/65b0e03ee55611706090558.png"
            alt=""
          />
        </div>
    </div>
  );
};

export default HelpPage;
