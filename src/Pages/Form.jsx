import Footer from "../Components/Footer";
import FormCard from "../Components/FormCard";
import Navbar from "../Components/Navbar";

function Form() {
  return (
    <div>
      <div className="bg-[#798880] pt-20">
        <Navbar />
        <div className="w-[60%] mx-auto my-20 pt-20 bg-[#4E6C50] bg-opacity-60 rounded-xl shadow-2xl shadow-[#395144] ">
          <h1 className="text-center text-4xl font-semibold text-green-100">
            Warga Melapor!
          </h1>
          <FormCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Form;
