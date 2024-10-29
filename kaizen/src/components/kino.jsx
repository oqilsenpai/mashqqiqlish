import React from "react";

const Kino = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex justify-between mb-5">
          <div className="flex gap-3">
            <div className="w-[120px] h-[48px] bg-red-700 rounded-md">
              <h2 className="text-center p-3">Все</h2>
            </div>
            <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
              <a href="kino">
                {" "}
                <h2 className="text-center p-3">Кино</h2>
              </a>
            </div>
            <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
              <h2 className="text-center p-3">Театр</h2>
            </div>
            <div className="w-[120px] h-[48px] bg-footer-color rounded-md">
              <h2 className="text-center p-3">Конерты</h2>
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
      </div>
      <div className="flex flex-col items-center my-[40px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <a href="kinonibospage">  <img
              src="/images/img2.png"
              alt="Cinematica"
              className="w-full h-48 object-cover"
            /> </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Cinematica</h3>
              <h5 className="text-gray-400">
                7, Улица Алмазар​, Шайхантахурский район
              </h5>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <a href="kinonibospage">  <img
              src="/images/img2.png"
              alt="Magic Cinema"
              className="w-full h-48 object-cover"
            /></a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Magic Cinema</h3>
              <h5 className="text-gray-400">
                174/12, Улица Бабура, Чиланзарский район
              </h5>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <a href="kinonibospage"> <img
              src="/images/img3.png"
              alt="Cinema Market"
              className="w-full h-48 object-cover"
            /></a> 
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">
                Cinema Market
              </h3>
              <h5 className="text-gray-400">
                2Б, Юнусабад 11-й квартал, Юнусабадский район
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kino;
