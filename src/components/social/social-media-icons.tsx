"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";
import { icons, Linkedin, X } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import Image from "next/image";

import githubsvg from "../../../public/assets/social-icons/githubsvg.svg";
import linkedinsvg from "../../../public/assets/social-icons/linksvg.svg";
import leetcodesvg from "../../../public/assets/social-icons/leetcodesvg.svg";
import codeforcessvg from "../../../public/assets/social-icons/code-forcessvg.svg";
import twittersvg from "../../../public/assets/social-icons/xsvg.svg";
import instagramsvg from "../../../public/assets/social-icons/instasvg.svg";

const BUTTONS = [
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <Image src={twittersvg} alt="LeetCode" width={28} height={24} />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <Image src={instagramsvg} alt="LeetCode" width={28} height={24} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <Image src={linkedinsvg} alt="LeetCode" width={28} height={24} />,
  },
  {
    name: "Github",
    href: config.social.github,
    icon: <Image src={githubsvg} alt="LeetCode" width={28} height={24} />,
  },
  {
    name: "leetcode",
    href: config.social.leetcode,
    icon: <Image src={leetcodesvg} alt="LeetCode" width={28} height={24} />,
  },
  {
    name: "codeforces",
    href: config.social.codeforces,
    icon: <Image src={codeforcessvg} alt="LeetCode" width={28} height={24} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
