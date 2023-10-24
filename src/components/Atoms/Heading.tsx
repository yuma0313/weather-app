interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = level;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
