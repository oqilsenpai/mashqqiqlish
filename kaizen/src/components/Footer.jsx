const Footer = () => {
  return (
    <footer className="bg-footer-color text-white w-[1180px] mx-16 my-12 p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-6">
        <img src="/images/footimg.png" alt="Footer Image" className="mx-2" />
        <img src="/images/footplay.png" alt="Footer Play" className="mx-2" />
        <img src="/images/footstore.png" alt="Footer Store" className="mx-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <img src="/images/smth.png" alt="About" className="mb-2" />
          <h1 className="text-lg font-semibold">О нас</h1>
          <img src="/images/satr.png" alt="Public Offer" className="my-1" />
          <h3>Публичная оферта</h3>
          <img src="/images/q.png" alt="FAQ" className="my-1" />
          <h3>F.A.Q</h3>
          <img src="/images/k.png" alt="Contacts" className="my-1" />
          <h3>Контакты</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Категории</h1>
          <img src="/images/kino.png" alt="Cinema" className="mb-2" />
          <h3>Кино</h3>
          <img src="/images/teatr.png" alt="Theater" className="my-1" />
          <h3>Театр</h3>
          <img src="/images/konsert.png" alt="Concert" className="my-1" />
          <h3>Концерты</h3>
          <img src="/images/sport.png" alt="Sport" className="my-1" />
          <h3>Спорт</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Связаться с нами</h1>
          <h3 className="mb-2">+998 (95) 897-33-38</h3>
          <h3 className="mb-2">Социальные сети</h3>
          <div className="flex space-x-2">
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
            <img src="/images/facebok.png" alt="Facebook" className="w-6 h-6" />
            <img src="/images/youtbe.png" alt="YouTube" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
