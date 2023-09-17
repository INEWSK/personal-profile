import LinkContent from "@/components/link-content";
import MainFooter from "@/components/main-footer";
import MainNav from "@/components/main-nav";
import ProfileHeader from "@/components/profile-header";
import SectionWrapper from "@/components/section-wrapper";
import SocialContent from "@/components/social-content";
import React from "react";

const components = [
  {
    label: "Social",
    node: SocialContent,
  },
  {
    label: "Link",
    node: LinkContent,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex h-16 items-center justify-end px-4">
        <MainNav />
      </div>
      <div className="flex flex-col flex-1 gap-8 items-center justify-center">
        <ProfileHeader />
        {components.map((component, i) => (
          <SectionWrapper key={i} text={component.label}>
            {React.createElement(component.node)}
          </SectionWrapper>
        ))}
        <div className="flex gap-4"></div>
      </div>
      <MainFooter />
    </main>
  );
}
