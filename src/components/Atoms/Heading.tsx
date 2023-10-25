interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const styles = {
  h1: "text-6xl",
  h2: "text-5xl",
  h3: "text-4xl",
  h4: "text-3xl",
  h5: "text-2xl",
  h6: "text-xl",
};

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = level;
  const combinedClassName = `${styles[level]} ${className}`;
  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Heading;
export type { HeadingProps };
