import React, { useEffect, useState } from 'react';

const Kinonibospage = () => {
  const [images, setImages] = useState([]);
  const fetchUrl = 'https://66cd8c938ca9aa6c8ccabdb1.mockapi.io/api/image';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto mb-12">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800 rounded-lg"></div>
            <h3 className="text-[#444444] mt-2">{image.title}</h3>
            <div className="flex flex-col items-center mt-2">
              <p className="mb-1">{image.time}</p>
              <div className="flex justify-between">
                <span className="bg-[#2d2d2d] text-white rounded px-1">{image.format}</span>
                <span className="bg-[#2d2d2d] text-white rounded px-1">{image.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className='bg-red-700 w-[360px] h-[70px] ml-[480px] mb-4'>  Получить билет</button>

      <div className="text-center mb-6">
        <button  className="text-red-700 w-40 h-12 bg-slate-900 rounded-lg shadow mx-2">
          Активные
        </button>
        <button className="w-40 h-12 bg-slate-900 text-white rounded-lg shadow mx-2">
          <a href="lastpage">История</a>
        </button>
      </div>

   

      <hr />
      <div className='flex gap-10 ml-5'>
        <h1 className='w-[120px]'>Magic Cinema</h1>
      
      </div>
    </div>
  );
}

export default Kinonibospage;
