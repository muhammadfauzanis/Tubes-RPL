import { List } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

import { AiFillAlert, AiFillEdit, AiOutlinePlusCircle } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

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

  // useEffect(() => {
  //   console.log(props.user);
  //   axios
  //     .get(`https://expressjs-server-production-da81.up.railway.app/laporan `)
  //     .then((res) => {
  //       setData([]);
  //       res.data.map((k) => {
  //         if (parseInt(props.user) <= 2 && k.status === false) {
  //           setData((res) => [
  //             ...res,
  //             {
  //               id_laporan: k.id_laporan,
  //               tujuan: k.tujuan,
  //               judul: k.judul,
  //               isi: k.isi,
  //               lokasi: k.lokasi,
  //               tanggal_laporan: k.tanggal_laporan,
  //               status: k.status,
  //               id_respon: k.id_respon,
  //               deskripsi: k.deskripsi,
  //               tanggal_respon: k.tanggal_respon,
  //             },
  //           ]);
  //         } else if (props.user === undefined && k.status === true) {
  //           setData((res) => [
  //             ...res,
  //             {
  //               id_laporan: k.id_laporan,
  //               tujuan: k.tujuan,
  //               judul: k.judul,
  //               isi: k.isi,
  //               lokasi: k.lokasi,
  //               tanggal_laporan: k.tanggal_laporan,
  //               status: k.status,
  //               id_respon: k.id_respon,
  //               deskripsi: k.deskripsi,
  //               tanggal_respon: k.tanggal_respon,
  //             },
  //           ]);
  //         }
  //       });
  //     })
  //     .catch((err) => console.log(err));
  //   console.log(data);
  // }, [props.user]);

  const url =
    "https://expressjs-server-production-da81.up.railway.app/laporan ";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData([]);
        res.data.data.map((k) => {
          setData((res) => [
            ...res,
            {
              id_laporan: k.id_laporan,
              tujuan: k.tujuan,
              judul: k.judul,
              isi: k.isi,
              lokasi: k.lokasi,
              tanggal_laporan: k.tanggal_laporan,
              status: k.status,
              id_respon: k.id_respon,
              deskripsi: k.deskripsi,
              tanggal_respon: k.tanggal_respon,
            },
          ]);
        });
      })
      .catch((e) => {
        console.log("e", e);
      });
  });

  const handleEdit = () => {};

  const handleAddRespon = () => {};

  let itemsEdit;
  if (props.user === "1") {
    itemsEdit = [
      <AiOutlinePlusCircle
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={handleEdit}
      />,
      <AiFillEdit
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={handleAddRespon}
      />,
    ];
  } else if (props.user === "2") {
    itemsEdit = [
      <AiFillEdit
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={handleAddRespon}
      />,
    ];
  }

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
                <h3>Instansi : {data.tujuan}</h3>
                <h3>Tempat : {data.lokasi}</h3>
                <h3>Tanggal : {data.tanggal_laporan}</h3>
                <p className="text-lg mt-10">{data.isi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <List
    size='large'
    className="p-12 text-white "
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item key={item.id}
      actions={itemsEdit}
      style={{
        fontSize: 18,
        color: 'white',
        marginBottom: 14
      }}
      > 
          <List.Item.Meta
          avatar={<AiFillAlert color='black' />}
            title={item.judul}
            description={item.lokasi}
          />
        {item.isi}

        {item.deskripsi !== null && 
        <List.Item.Meta
        style={{
          marginLeft: 40,
          marginTop: 5,
          fontSize: 25,
          borderRadius: 20,
          padding: 8,
          border: '1px solid white',
          width: '50%'
        }}
            title={item.deskripsi}
          />
        }
      </List.Item>
    )}
    />  */}
    </div>
  );
}
export default ReportList;
