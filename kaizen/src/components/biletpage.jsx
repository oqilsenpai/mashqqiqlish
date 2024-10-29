import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BiletPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <div className="text-center mb-6">
        <button className="text-red-700 w-40 h-12 bg-slate-900 rounded-lg shadow mx-2">
          Активные
        </button>
        <button className="w-40 h-12 bg-slate-900 text-white rounded-lg shadow mx-2">
          <a href="extrapage"> История</a>
        </button>
      </div>

      {/* Ticket Cards */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex bg-slate-900 rounded-lg shadow-lg p-4 w-full max-w-4xl mb-8">
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
            <button className="bg-slate-500 text-white rounded-lg px-4 py-2 shadow mb-4">
              Оплачено
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-4">
        <h3 className="text-white text-lg font-bold">Ваш билет готов</h3>
        <button
          className="w-[278px] h-[52px] bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
          onClick={handleShow}
        >
          Получить билет
        </button>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        className=" text-white" 
      >
        <Modal.Header closeButton>
          <Modal.Title>Ваш Билет</Modal.Title>
        </Modal.Header >
        <Modal.Body className="bg-blue-950">
          <div className="flex bg-slate-900 rounded-lg shadow-lg p-4 w-full mb-8">
            <img
              src="/images/pasawanda.png"
              alt="Pasawanda"
              className="w-1/3 h-auto rounded-lg mr-4"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">Кунг Фу Панда 4</h2>
              <h3 className="text-lg mb-1">2024 RU 6+ 1ч 34м / 94 минут</h3>
              <h3 className="text-lg mb-1">Magic Cinema</h3>
              <h3 className="text-lg mb-1">Зал №1</h3>
              <h3 className="text-lg mb-4">28 марта, 19:30</h3>
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg mb-4">
         
            <h4 className="text-lg mb-1">Комиссия сервиса:<strong>135 000 сум</strong></h4>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg mb-4">
            
            <h4 className="text-lg mb-1">Общая сумма: <strong>135 000 сум</strong></h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Получить билет
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BiletPage;
