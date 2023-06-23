import { Button, Card, } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Swal from "sweetalert2";
import ModalAddRespon from "./ModalAddRespon";
import Cookies from "js-cookie";

function ReportList(props) {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    } else {
      setOpen(i);
    }
  };

  const url =
  "https://expressjs-server-production-da81.up.railway.app/laporan ";
  useEffect(() => {
    // console.log(props.user);
    axios
      .get(`https://expressjs-server-production-da81.up.railway.app/laporan `)
      .then((res) => {
        setData([]);
        res.data.data.map((k) => {
          let tanggalRespon = null
          if (k.tanggal_respon !== null) {
            tanggalRespon = k.tanggal_respon.substring(0, 10)
          }
          if (parseInt(props.user) === 1 && k.id_respon === null) {
            setData((res) => [
              ...res,
              {
                id_laporan: k.id_laporan,
                tujuan: k.tujuan,
                judul: k.judul,
                isi: k.isi,
                lokasi: k.lokasi,
                tanggal_laporan: k.tanggal_laporan.substring(0, 10),
                status: k.status,
                id_respon: k.id_respon,
                deskripsi: k.deskripsi,
                tanggal_respon: tanggalRespon,
              },
            ]);
          } else if ((parseInt(props.user) === 2 && k.tujuan === Cookies.get('nama')) && k.status === true ) {
            setData((res) => [
              ...res,
              {
                id_laporan: k.id_laporan,
                tujuan: k.tujuan,
                judul: k.judul,
                isi: k.isi,
                lokasi: k.lokasi,
                tanggal_laporan: k.tanggal_laporan.substring(0, 10),
                status: k.status,
                id_respon: k.id_respon,
                deskripsi: k.deskripsi,
                tanggal_respon: tanggalRespon,
              },
            ]);
          }else if (props.user === undefined && k.status === true) {
            setData((res) => [
              ...res,
              {
                id_laporan: k.id_laporan,
                tujuan: k.tujuan,
                judul: k.judul,
                isi: k.isi,
                lokasi: k.lokasi,
                tanggal_laporan: k.tanggal_laporan.substring(0, 10),
                status: k.status,
                id_respon: k.id_respon,
                deskripsi: k.deskripsi,
                tanggal_respon: tanggalRespon,
              },
            ]);
          }
        });
      })
      .catch((err) => console.log(err));
    console.log(data);
  },[]);

  const handleEditReport = (idLaporan) => {
    axios.put(`https://expressjs-server-production-da81.up.railway.app/laporan`, {"id": idLaporan })
    .then(res => {
      Swal.fire({
        icon: "success",
        title: "Tambah Laporan Berhasil",
        background: "#61876E",
        timer: 2000,
      });
      window.location.reload(false)
      // console.log(res.data)
    })
    .catch(err => console.log(err))
  }

 

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData([]);
  //       res.data.data.map((k) => {
  //         setData((res) => [
  //           ...res,
  //           {
  //             id_laporan: k.id_laporan,
  //             tujuan: k.tujuan,
  //             judul: k.judul,
  //             isi: k.isi,
  //             lokasi: k.lokasi,
  //             tanggal_laporan: k.tanggal_laporan,
  //             status: k.status,
  //             id_respon: k.id_respon,
  //             deskripsi: k.deskripsi,
  //             tanggal_respon: k.tanggal_respon,
  //           },
  //         ]);
  //       });
  //     })
  //     .catch((e) => {
  //       console.log("e", e);
  //     });
  // });

  // const handleEdit = () => {};

  // const handleAddRespon = () => {};

  // let itemsEdit;
  // if (props.user === "1") {
  //   itemsEdit = [
  //     <AiOutlinePlusCircle
  //       style={{ cursor: "pointer", fontSize: 24 }}
  //       onClick={handleEdit}
  //     />,
  //     <AiFillEdit
  //       style={{ cursor: "pointer", fontSize: 24 }}
  //       onClick={handleAddRespon}
  //     />,
  //   ];
  // } else if (props.user === "2") {
  //   itemsEdit = [
  //     <AiFillEdit
  //       style={{ cursor: "pointer", fontSize: 24 }}
  //       onClick={handleAddRespon}
  //     />,
  //   ];
  // }

  return (
    <div className="flex justify-center w-full h-full ">
      <div className="flex flex-col gap-4 h-[100%] w-[100%] mb-7">
        <div className="flex justify-start items-center bg-[#879775] p-5 rounded-t-lg mb-5">
          <h2 className="text-white text-[36px] text-center font-semibold">
            Laporan Pengaduan
          </h2>
        </div>

        {data.map((data, i) => (
          <div>
            <div
              className="flex justify-between m-auto p-4 mb-5 rounded-lg w-[90%] bg-[#61876E] cursor-pointer shadow-md shadow-[#395144]"
              onClick={() => toggle(i)}
            >
              <h2 className="text-3xl font-semibold text-white">
                {data.judul}
              </h2>
              <div>
                {open === i ? (
                  <RiArrowDropUpLine
                    className="text-white transition"
                    size={50}
                  />
                ) : (
                  <RiArrowDropDownLine
                    className="text-white transition"
                    size={50}
                  />
                )}
              </div>
            </div>
            <div
              className={`m-auto w-[90%] h-full p-7 -mt-7 bg-[#A6BB8D] rounded-b-lg shadow-md shadow-[#395144] ${
                open === i ? "visible" : "hidden"
              } `}
            >
              <div className="text-xl">
                {/* <p>Status: {data.status.toString()}</p> */}
                <h3>Tujuan : {data.tujuan}</h3>
                <h3>Tempat : {data.lokasi}</h3>
                <h3>Tanggal : {data.tanggal_laporan}</h3>
                <p className="text-lg mt-10">{data.isi}</p>

                {(data.status === true && data.id_respon !== null) && 
                <Card
                style={{
                  marginTop: 20
                }}
                  type="inner"
                  title="Respon"
                  extra={data.tanggal_respon}
                >
                  {data.deskripsi}
                </Card>}

                <div className="flex gap-14 mt-4">
                  {data.status === false && parseInt(props.user) === 1 && <Button size="large" type="primary" onClick={() => handleEditReport(data.id_laporan)} >Terima</Button>}
                  {(data.id_respon === null && parseInt(props.user) <= 2) && <ModalAddRespon id={data.id_laporan} />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ReportList;
