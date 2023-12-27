import { constants } from "@/constants";
import React from "react";
import { FaFileContract, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

const items = [
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    url: constants.LINKEDIN_URL,
  },
  {
    label: "Github",
    icon: FaGithub,
    url: constants.GITHUB_URL,
  },
  {
    label: "Resume",
    icon: FaFileContract,
    url: constants.RESUME_URL,
  },
];

const LinkContent = () => {
  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <Button
          asChild
          key={item.label}
          className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          title={item.label}
          variant={"ghost"}
        >
          <a href={item.url} className="flex gap-2">
            {React.createElement(item.icon, { className: "w-4 h-4" })}
            {item.label}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default LinkContent;
