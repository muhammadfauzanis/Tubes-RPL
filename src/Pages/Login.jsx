import { FaRegUserCircle } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import heroImage from "../assets/images/hero.jpg";
import axios from "axios";

function Login() {
  const [visible, setVisible] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get('username') !== undefined) {
      navigate('/')
    }

  })

  const onSubmit = (data) => {
    axios.post(`http://localhost:5000/signIn`, data)
    .then(res =>{
      if (res.data.status === 'berhasil') {
        Cookies.set('id_kategori', res.data.data[0].id_kategori)
        Cookies.set('username', res.data.data[0].username)
        alert('Login Berhasil')
        navigate("/")
      } else {
        alert('Login Gagal')
      }
    })
  };

  return (
    <div
      className="flex justify-center content-center h-screen w-screen "
      style={{
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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center md:justify-start ">
            <AiOutlineUser size={25} type="text" />
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Nama Pengguna"
                {...register("username", {
                  required: "Nama pengguna tidak boleh kosong",
                })}
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
              {errors.username && (
                <p className="text-red-500 text-xs px-3">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          <hr />
          <div className="flex items-center md:justify-start ">
            <AiOutlineLock size={25} />
            <div className="relative">
              <input
                type={visible ? "password" : "text"}
                name="password"
                placeholder="Kata Sandi"
                {...register("password", {
                  required: "Kata sandi tidak boleh kosong",
                })}
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
              {errors.password && (
                <p className="text-red-500 text-xs px-3">
                  {errors.password.message}
                </p>
              )}
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
