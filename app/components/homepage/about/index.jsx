// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import RoundedGlowCard from "../../helper/rounded-glow-card";
import { Lighter } from "../../helper/lighter";

function AboutSection() {
  return (
    <div id="about" className="h-fit relative pt-32 pb-10">
      <Image
        src="/section.svg"
        alt="background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <Lighter
        identifier="about"
        className="absolute top-16 right-0"
        move="right"
      >
        About Me
      </Lighter>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <RoundedGlowCard identifier="avatar">
            <div className="relative w-[286px] h-[286px] rounded-full flex items-center justify-center transition-colors duration-100">
              <Image
                width={280}
                height={280}
                src={personalData.profile}
                alt="profile picture"
                className="rounded-full object-cover"
              />
            </div>
          </RoundedGlowCard>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
