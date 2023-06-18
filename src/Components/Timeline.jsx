import { BsPencilSquare } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoCheckmarkDone } from "react-icons/io5";

function Timeline() {
  return (
    <div className="bg-[#798880]">
      <ul className="flex flex-row m-auto justify-between gap-10 p-10 w-[90%] text-white">
        <li className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#395144] flex items-center justify-center">
            <BsPencilSquare size={30} />
          </div>
          <h3 className="text-xl font-semibold ">Tulis Laporan</h3>
          <p className="text-center">
            Laporkan Keluhan atau aspirasi anda dengan jelas dan lengkap
          </p>
        </li>
        <li className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#395144]  flex items-center justify-center">
            <RiShareForwardLine size={30} />
          </div>
          <h3 className="text-xl font-semibold ">Proses Verifikasi</h3>
          <p className="text-center">
            Laporkan Keluhan atau aspirasi anda dengan jelas dan lengkap
          </p>
        </li>
        <li className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#395144]  flex items-center justify-center">
            <LuClipboardCheck size={30} />
          </div>
          <h3 className="text-xl font-semibold ">Proses Tindak Lanjut</h3>
          <p className="text-center">
            Laporkan Keluhan atau aspirasi anda dengan jelas dan lengkap
          </p>
        </li>
        <li className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#395144]  flex items-center justify-center">
            <TfiCommentAlt size={30} />
          </div>
          <h3 className="text-xl font-semibold ">Beri Tanggapan</h3>
          <p className="text-center">
            Laporkan Keluhan atau aspirasi anda dengan jelas dan lengkap
          </p>
        </li>
        <li className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#395144]  flex items-center justify-center">
            <IoCheckmarkDone size={30} />
          </div>
          <h3 className="text-xl font-semibold ">Selesai</h3>
          <p className="text-center">
            Laporkan Keluhan atau aspirasi anda dengan jelas dan lengkap
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
