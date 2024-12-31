import HeaderNavbar from "@/Components/Admin/Header/HeaderNavbar";
import SupportSection from "@/Components/Home/SupportSection";

const AdminProvider = ({ children }) => {
  return (
    <div>
      <div>
        <HeaderNavbar />
      </div>
      <div className="max-w-7xl mx-auto  my-10">{children}</div>
    </div>
  );
};

export default AdminProvider;
