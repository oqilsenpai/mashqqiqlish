import React from "react";

const NewPage = () => {
  return (
    <div className="p-4"> 

      <div className="flex justify-between mb-5"> 
        <div className="flex gap-3">
          <div className="w-[120px] h-[48px] bg-red-700 rounded-md">
            <h2 className="text-center p-3">Все</h2>
          </div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
           <a href="kino">  <h2 className="text-center p-3">Кино</h2></a>
          </div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
            <h2 className="text-center p-3">Театр</h2>
          </div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
            <h2 className="text-center p-3">Концерты</h2>
          </div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
            <h2 className="text-center p-3">Спорт</h2>
          </div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
            <h2 className="text-center p-3">Другие</h2>
          </div>
        </div>
        <div>
          <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
            <h2 className="text-center p-3">Залы</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-left">На неделе</h2>
        <h2 className="text-red-600 cursor-pointer">Показать все</h2>
      </div>
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
      <div className="flex justify-around my-12">
        <div  className="flex gap-3">
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>CHT</h2><h1>28</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>CHT</h2><h1>28</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>CHT</h2><h1>28</h1></div>
        </div>
        <div className="flex gap-3">
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>

        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        <div className="w-[74px] h-[74px] bg-footer-color rounded-lg text-center p-3"> <h2>Ср</h2><h1>2</h1></div>
        </div>
      </div>
      <div className="flex justify-between my-14">
        <h1>Мероприятия</h1>
        <h1 className="text-red-500">Показать все</h1>
      </div>
      
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
      <div className="flex justify-between my-14">
        <h1>Театр</h1>
        <h1 className="text-red-500">Показать все</h1>
      </div>
      
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
      <div className="flex justify-between my-14">
        <h1>Кино</h1>
        <h1 className="text-red-500">Показать все</h1>
      </div>
      
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
  );
};

export default NewPage;
