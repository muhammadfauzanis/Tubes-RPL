import { FaRegUserCircle } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import heroImage from "../assets/images/hero.jpg";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (Cookies.get("username") !== undefined) {
      navigate("/");
    }
  });

  const navigate = useNavigate();

  // Validasi Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("signIn");

  const urlAdmin =
    "https://expressjs-server-production-da81.up.railway.app/signIn";
  const urlInstansi =
    "https://expressjs-server-production-da81.up.railway.app/instansi";

  const handleLogin = (e) => {
    e.preventDefault();

    const url = role === "signIn" ? urlAdmin : urlInstansi;

    axios
      .post(url, { username, password })
      .then((res) => {
        // data.username === userame && data.password === password
        let userInfo = res.data.data;
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            background: "#61876E",
            timer: 3000,
          });
          userInfo.map((k) => {
            Cookies.set("nama", k.nama);
            Cookies.set("username", k.username);
            Cookies.set("id_kategori", k.id_kategori);
          });
          navigate("/");
        } else if (res.data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: "Username atau Kata Sandi Salah",
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex justify-center content-center h-screen w-screen "
      style={{
        // backgroundColor: '#f1f1f1',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className=" bg-[#395144] bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-2xl w-full ">
        <h2 className="text-white text-4xl mb-8 font-semibold text-center ">
          Selamat Datang!
        </h2>
        <FaRegUserCircle className="m-auto mb-16" size={80} />

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex items-center md:justify-start ">
            <AiOutlineUser size={25} type="text" />
            <div className="relative">
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                value={username}
                type="text"
                name="username"
                placeholder="Nama Pengguna"
                className="
                block
                  border-0 
                  bg-transparent
                  px-3
                  w-full
                  text-md
                  text-white
                  appearance-none
                  focus:outline-none
                  focus:ring-0
                "
              />
            </div>
          </div>

          <hr />
          <div className="flex items-center md:justify-start ">
            <AiOutlineLock size={25} />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
                type={visible ? "password" : "text"}
                name="password"
                placeholder="Kata Sandi"
                className="
                  block
                  border-0 
                  bg-transparent
                  px-3
                  w-full
                  text-md
                  text-white
                  appearance-none
                  focus:outline-none
                  focus:ring-0
                "
              />
            </div>
            <div className="ml-12" onClick={() => setVisible(!visible)}>
              {visible ? (
                <AiOutlineEyeInvisible className="cursor-pointer " size={25} />
              ) : (
                <AiOutlineEye className="cursor-pointer" size={25} />
              )}
            </div>
          </div>
          <hr />

          <button className=" bg-[#566e58] py-3 text-white rounded-md w-32 mt-10 hover:bg-[#3f6d42] transition flex m-auto justify-center">
            Masuk!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
