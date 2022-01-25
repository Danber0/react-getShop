import React from "react";
import qrcode from "../assets/qrcode.png";

export const QrCode: React.FC = () => {
  return (
    <div className="qrcode">
      <div className="qrcode__container">
        <h5>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</h5>
        <img src={qrcode} alt="" />
      </div>
    </div>
  );
};
