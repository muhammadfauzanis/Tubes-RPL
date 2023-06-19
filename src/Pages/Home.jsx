import Cookies from "js-cookie";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ReportList from "../Components/ReportList";
import Timeline from "../Components/Timeline";

function Home() {
  
  return (
    <div>
      <div className="bg-[#798880] pt-20">
        <Navbar />;
        <Hero />
      </div>
      <div className="bg-[#4E6C50]">
        <ReportList user={Cookies.get('id_kategori')}/>
      </div>
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
