import React from "react";
import qrcode from "../assets/qrcode.png";

export const Welcome = () => {
  return (
    <div className="intro__content">
      <div className="container">
        <div className="dream">
          <div className="dream__title">
            <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</h3>
          </div>
          <div className="dream__image">
            <img src={qrcode} alt="qrcode" />
          </div>
          <div className="dream__text">
            <p>Сканируйте QR-код или нажмите ОК</p>
          </div>
          <div className="dream__button">
            <button>ОК</button>
          </div>
        </div>
      </div>
    </div>
  );
};
