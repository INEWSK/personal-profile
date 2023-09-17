import React from "react";
import Divider from "./ui/divider";

const SectionWrapper = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  children?: React.ReactNode;
}) => {
  const defaultClasses = "flex flex-col gap-2";
  const classes = className ? `${defaultClasses} ${className}` : defaultClasses;
  return (
    // className include classes and text
    <section id={text?.toLowerCase()} className={classes}>
      <Divider text={text} />
      {children}
    </section>
  );
};

export default SectionWrapper;
