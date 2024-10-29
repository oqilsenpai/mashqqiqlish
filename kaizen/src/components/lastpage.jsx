import React from "react";

const Lastpage = () => {
  return (
    <div>
      <img
        className="w-[1200px] mx-14 m-6"
        src="/images/panda.png"
        alt="smth"
      />
      <button className="bg-red-700 w-[360px] h-[70px] ml-[480px] mb-4">
        Получить билет
      </button>
   

      <div className="p-6 text-center">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-black w-[180px] h-[64px] border border-[#111111] rounded-[12px] mb-2">
            <div className="flex items-center justify-center h-full">
              <span className="font-bold text-2xl text-white">6.6</span>
            </div>
          </div>
          <div className="bg-black w-[180px] h-[64px] border border-[#111111] rounded-[12px] mb-2">
            <div className="flex items-center justify-center h-full">
              <span className="font-bold text-2xl text-white">6.8</span>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-lg mb-1">Продолжительность: 1ч 34м / 94 минут</div>
        <div className="text-white font-semibold text-lg mb-1">Детали</div>
        <div className="text-gray-400 mb-1">Премьера: 07 марта 2024</div>
        <div className="text-gray-400 mb-1">Производство: США, Китай</div>
        <div className="text-gray-400 mb-1">Жанр: Фэнтези, Комедия</div>
        <div className="text-gray-400 mb-1">Режиссер: Майк Митчелл, Стефани Стайн</div>
        <div className="text-gray-400 mb-1">Возрастной рейтинг: 6+</div>
        
        <div className="mt-4 mb-2 text-white font-semibold">В ролях:</div>
        <div className="text-gray-400 mb-1">Джек Блэк</div>
        <div className="text-gray-400 mb-1">Аквафина</div>
        <div className="text-gray-400 mb-1">Виола Дэвис</div>
        <div className="text-gray-400 mb-1">Дастин Хоффман</div>
        <div className="text-gray-400 mb-1">Джеймс Хун</div>
        <div className="text-gray-400 mb-1">Брайан Крэнстон</div>
        <div className="text-gray-400 mb-1">Иэн Макшейн</div>
        <div className="text-gray-400 mb-1">Ке Хюи Куан</div>
        <div className="text-gray-400 mb-1">Ронни Чиэн</div>
        <div className="text-gray-400 mb-1">Лори Тань Чинн</div>
        
        <div className="text-white font-semibold mt-4">Сюжет:</div>
        <div className="text-gray-400 mb-6">
          Продолжение приключений легендарного Воина Дракона, его верных друзей и наставника (часть вторая)
        </div>
         <button className="bg-red-700 w-[360px] h-[70px]  mb-4">
         Купить билет
      </button>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800"></div>
            <h1 className="mt-2 text-center">Kung Fu Panda 4<br />ENGLISH</h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800"></div>
            <h1 className="mt-2 text-center">Dune 2 – EN</h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800"></div>
            <h1 className="mt-2 text-center">Дюна – RU</h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800"></div>
            <h1 className="mt-2 text-center">Kung Fu Panda 4<br />RUSSIAN</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
