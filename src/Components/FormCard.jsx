import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GrAttachment } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormCard() {
  const [showPopUp, setShowPopup] = useState(false);
  const { handleSubmit, reset } = useForm();

  const [laporan, setLaporan] = useState({
    judul: "",
    isi: "",
    tanggal: "",
    lokasi: "",
    tujuan: "",
  });

  const [instansi, setInstansi] = useState([]);
  const [valid, setValid] = useState(false);

  const navigate = useNavigate();

  const urlLaporan =
    "https://expressjs-server-production-da81.up.railway.app/laporan";
  const urlInstansi =
    "https://expressjs-server-production-da81.up.railway.app/instansi";

  useEffect(() => {
    axios
      .get(urlInstansi)
      .then((res) => {
        setInstansi(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLaporan({ ...laporan, [name]: value });
    console.log(laporan);
  };

  const onSubmit = () => {
    const isFormValid = Object.values(laporan).every((value) => value !== "");
    if (isFormValid) {
      setShowPopup(true);
      setTimeout(() => {
        axios.post(urlLaporan, laporan).then((res) => {
          reset();
          setValid(true);
        });
      }, 3000);
    } else {
      setTimeout(() => {
        setShowPopup(true);
      }, 3000);
    }
  };

  const popUp = () => {
    if (valid) {
      Swal.fire({
        icon: "success",
        title: "Terima Kasih Atas Laporan Anda!",
        text: "Laporan Anda Akan Diproses Oleh Tim Kami",
        background: "#61876E",
        color: "#fff",
        iconColor: "#A6BB8D",
        confirmButtonColor: "#A6BB8D",
        time: 2000,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Laporan Gagal!",
        text: "Mohon lengkapi data anda",
        background: "#61876E",
        color: "#fff",
        iconColor: "#A6BB8D",
        confirmButtonColor: "#A6BB8D",
        time: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center pt-16 w-full h-full">
      <form
        className="flex flex-col gap-4 box h-[50%] w-[85%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-start bg-[#879775] w-full content-center mb-12 p-3 rounded-md">
          <h1 className="text-2xl font-semibold text-white">
            Sampaikan Laporan Anda
          </h1>
        </div>
        <input
          onChange={handleInput}
          value={laporan.judul}
          name="judul"
          id="judul"
          className="p-3 rounded-md border-2 border-transparent bg-[#d7e4d7]"
          type="text"
          placeholder="Ketik Judul Laporan Anda"
        />

        <textarea
          onChange={handleInput}
          id="isi"
          value={laporan.isi}
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7]"
          name="isi"
          cols="30"
          rows="10"
          placeholder="Ketik Isi Laporan Anda"
        ></textarea>

        <input
          onChange={handleInput}
          name="tanggal"
          id="tanggal"
          value={laporan.tanggal}
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7] text-gray-400 cursor-text"
          type="date"
          placeholder="Pilih Tanggal Kejadian"
        />

        <input
          onChange={handleInput}
          name="lokasi"
          id="lokasi"
          value={laporan.lokasi}
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7]"
          type="text"
          placeholder="Lokasi Kejadian"
        />

        <select
          onChange={handleInput}
          name="tujuan"
          id="tujuan"
          value={laporan.tujuan}
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7] "
          placeholder="Instansi Tujuan"
        >
          <option value="" className="text-gray-400">
            Instansi Tujuan
          </option>

          {instansi.map((k) => {
            return <option key={k.nama}>{k.nama}</option>;
          })}
        </select>
        <div className="flex justify-between pr-7 mt-20 mb-16">
          <label
            htmlFor="file-upload"
            className="file-upload flex flex-row items-center cursor-pointer"
          >
            <GrAttachment className="mr-5 ml-5 " size={20} />
            <span className="text-lg font-semibold text-green-100">
              {/* Optional */}
              Unggah Lampiran
            </span>
            <input id="file-upload" type="file" className="hidden" />
          </label>
          <button
            onClick={() => {
              if (showPopUp) {
                popUp();
              }
            }}
            className=" bg-[#85a888] p-3 text-white rounded-md w-32 hover:bg-[#5d9461] transition "
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCard;
