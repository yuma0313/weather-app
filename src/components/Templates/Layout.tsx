interface MainLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

const Layout: React.FC<MainLayoutProps> = ({ header, content }) => {
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen">
      <div className="bg-white/25 w-full flex flex-col h-fit min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10">
          {header}
        </div>
        {content}
      </div>
    </div>
  );
};

export default Layout;
