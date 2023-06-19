import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrAttachment } from "react-icons/gr";
import Swal from "sweetalert2";

function FormCard() {
  const [showPopUp, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const isFormValid = Object.values(data).every((value) => value !== "");
    if (isFormValid) {
      setShowPopup(true);
      reset();
    }
  };

  const popUp = () => {
    Swal.fire({
      icon: "success",
      title: "Terima Kasih Atas Laporan Anda!",
      text: "Laporan Anda Akan Diproses Oleh Tim Kami",
      background: "#61876E",
      color: "#fff",
      iconColor: "#A6BB8D",
      confirmButtonColor: "#A6BB8D",
    });
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
          className="p-3 rounded-md border-2 border-transparent bg-[#d7e4d7]"
          type="text"
          placeholder="Ketik Judul Laporan Anda"
          {...register("judul", {
            required: "Judul tidak boleh kosong",
          })}
        />
        {errors.judul && (
          <p className="text-red-500 text-sm px-3">{errors.judul?.message}</p>
        )}
        <textarea
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7]"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Ketik Isi Laporan Anda"
          {...register("isiLaporan", {
            required: "Isi Laporan tidak boleh kosong",
          })}
        ></textarea>
        {errors.isiLaporan && (
          <p className="text-red-500 text-sm px-3">
            {errors.isiLaporan?.message}
          </p>
        )}
        <input
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7] text-gray-400 cursor-text"
          type="date"
          placeholder="Pilih Tanggal Kejadian"
          {...register("tanggal", {
            required: "Tanggal tidak boleh kosong",
            pattern: {
              value: /^(31dd|12[0-2]d|2024)$/,
              message: "Mohon masukkan tahun yang benar",
            },
          })}
        />
        {errors.tanggal && (
          <p className="text-red-500 text-sm px-3">{errors.tanggal?.message}</p>
        )}
        <input
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7]"
          type="text"
          placeholder="Lokasi Kejadian"
          {...register("lokasi", {
            required: "Lokasi tidak boleh kosong",
          })}
        />
        {errors.lokasi && (
          <p className="text-red-500 text-sm px-3">{errors.lokasi?.message}</p>
        )}
        <input
          className="p-3 rounded-md border-2 border-black border-transparent bg-[#d7e4d7]"
          type="text"
          placeholder="Instansi Tujuan"
          {...register("instansi", {
            required: "Instansi tidak boleh kosong",
          })}
        />
        {errors.instansi && (
          <p className="text-red-500 text-sm px-3">
            {errors.instansi?.message}
          </p>
        )}
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
