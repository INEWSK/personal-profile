import { constants } from "@/constants";
import React from "react";
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";

const items = [
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
    <div className="flex space-x-4 flex-wrap items-center justify-center">
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

export default SocialContent;
