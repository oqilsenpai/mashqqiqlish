import React, { useContext, useState } from "react";
import ReactInputMask from "react-input-mask";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [phone, setPhone] = useState("");

  const {login} = useContext(AuthContext)
  const submitHandler = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status >= 400) {
          throw new Error("Login qilishda xatolik");
        }
        return res.json();
      })
      .then((json) => {
        login(json.token)
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Регистрация</h1>
      <h3 className="text-lg text-center mb-4">
        Введите номер телефона для того чтобы войти или пройти регистрацию
      </h3>
      <ReactInputMask
        className="bg-purple-950 text-white min-w-96 px-4 py-5"
        mask="+99 (99) 999-99-99"
        value={phone}
        onChange={(evt) => {
          setPhone(evt.target.value);
        }}
      />
      ;
      <button
        className="w-96 h-12 bg-red-800 text-white rounded-md hover:bg-red-700 transition duration-200"
        onClick={submitHandler}
      >
        Регистрация
      </button>
    </div>
  );
};

export default Login;
