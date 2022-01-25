import React from "react";
import qrcode from "../assets/qrcode.png";

interface WelcomeProps {
  inputNumber: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ inputNumber }) => {
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
            <button onClick={inputNumber}>ОК</button>
          </div>
        </div>
      </div>
    </div>
  );
};
