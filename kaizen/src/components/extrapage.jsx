import React from 'react';

const ExtraPage = () => { 
  return (
    <div><div className="flex bg-slate-900 rounded-lg shadow-lg p-4 w-full max-w-4xl mb-8">
    <img
      src="/images/pasawanda.png"
      alt="Pasawanda"
      className="w-1/3 h-auto rounded-lg mr-4"
    />
    <div className="text-white flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-2">Кунг Фу Панда 4</h2>
      <h3 className="text-lg mb-1">2024 RU 6+ 1ч 34м / 94 минут</h3>
      <h3 className="text-lg mb-1">Magic Cinema</h3>
      <h3 className="text-lg mb-1">Зал №1</h3>
      <h3 className="text-lg mb-4">28 марта, 19:30</h3>
      <button  className=" bg-slate-500 text-white rounded-lg px-4 py-2 shadow  mb-4">
        Оплачено
      </button>
    </div>
  </div><div className="flex bg-slate-900 rounded-lg shadow-lg p-4 w-full max-w-4xl mb-8">
        <img
          src="/images/pasawanda.png"
          alt="Pasawanda"
          className="w-1/3 h-auto rounded-lg mr-4"
        />
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Кунг Фу Панда 4</h2>
          <h3 className="text-lg mb-1">2024 RU 6+ 1ч 34м / 94 минут</h3>
          <h3 className="text-lg mb-1">Magic Cinema</h3>
          <h3 className="text-lg mb-1">Зал №1</h3>
          <h3 className="text-lg mb-4">28 марта, 19:30</h3>
          <button  className=" bg-slate-500 text-white rounded-lg px-4 py-2 shadow  mb-4">
            Оплачено
          </button>
        </div>
      </div></div>
  );
}

export default ExtraPage;
