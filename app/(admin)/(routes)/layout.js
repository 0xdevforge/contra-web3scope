import Navbar from "/components/Navbar";
import SideNav from "/components/SideNav";

const Admin = ({ children }) => {
  return (
    <div className="flex">
      <div className="">
        <SideNav />
      </div>
      <main className="w-full pr-4 bg-white">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Admin;
