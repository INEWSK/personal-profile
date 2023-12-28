import Footer from "@/components/footer";
import Header from "@/components/header";
import LinkContent from "@/components/link-content";
import ProfileHeader from "@/components/profile-header";
import SocialContent from "@/components/social-content";
import Divider from "@/components/ui/divider";
import { createElement } from "react";

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
      <Header />
      <div className="flex flex-col flex-1 gap-8 items-center justify-center p-4">
        <ProfileHeader />
        {components.map((component, i) => (
          <section key={component.label} id={component.label.toLowerCase()}>
            <Divider text={component.label} />
            {createElement(component.node)}
          </section>
        ))}
        <p className="text-sm text-center text-gray-400 dark:text-gray-500">
          This page is under construction.
        </p>
      </div>
      <Footer />
    </main>
  );
}
