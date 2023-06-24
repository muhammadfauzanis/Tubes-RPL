import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";


function Dashboard() {
  return (
      <div className="bg-[#798880] pt-20">
        <Navbar />;
        <div className=" h-3/4 px-8 py-40 bg-white">
          <Sidebar />
        </div>
        <Footer />
    </div>
  );
}

export default Dashboard;
