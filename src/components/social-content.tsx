import { constants } from "@/constants";
import React from "react";
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";

const socialItems = [
  {
    label: "Instagram",
    icon: FaInstagram,
    url: constants.INS_URL,
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    url: constants.TWITTER_URL,
  },
  {
    label: "Telegram",
    icon: FaTelegram,
    url: constants.TELEGRAM_URL,
  },
  {
    label: "Discord",
    icon: FaDiscord,
    url: constants.DISCORD_URL,
  },
];

const SocialContent = () => {
  return (
    <div className="flex space-x-4">
      {socialItems.map((button) => (
        <Button
          asChild
          key={button.label}
          className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          title={button.label}
          variant={"ghost"}
        >
          <a href={button.url} className="flex gap-2">
            {React.createElement(button.icon, { className: "w-4 h-4" })}
            {button.label}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialContent;
