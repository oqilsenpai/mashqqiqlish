import React, { useContext } from "react";
import NewPage from "./newPage";

import { AuthContext } from "../context/authContext";
import BiletPage from "./biletpage";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const { isLogin, logut } = useContext(AuthContext);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  console.log(language);

  console.log(isLogin);
  const changeLanguage = (evt) => {
    dispatch({ type: evt.target.value });
  };
  console.log(language)
  return (
    <header className="flex justify-around my-14">
      <div>
        <a href="/">
          <img
            className="w-[112px] h-[36px]"
            src="/images/Logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex">
        <img src="/images/Main.png" alt="smth" />
        <a href="NewPage">
          {" "}
          <img className="w-[110px]" src="/images/transfer.png" alt="smth" />
        </a>
        <a href="BiletPage">
          {" "}
          <img className="w-[110px]" src="/images/Monitoring.png" alt="smth" />
        </a>
        <a href="search">
          {" "}
          <img
            className="w-[110px]"
            src="/images/searcgh.png"
            alt="smth"
          />{" "}
        </a>
      </div>
      <div className="flex items-center ">
        <div>
          <select
            onChange={changeLanguage}
            value={language}
            className="p-[15px] bg-[#1D1D1D80] rounded-[12px] outline-none"
          >
            {" "}
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>
        {isLogin ? (
          <button
            onClick={logut}
            className="w-[180px] h-[56px] bg-red-700 rounded-xl"
          >
            chiqish
          </button>
        ) : (
          <a href="test">
            <button className="w-[180px] h-[56px] bg-red-700 rounded-xl">
              Войти
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
