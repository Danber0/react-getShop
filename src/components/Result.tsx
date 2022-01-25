import React from "react";
import { QrCode } from "./QuCode";

export const Result = () => {
  return (
    <div className="intro__content">
      <div className="container">
        <div className="result">
          <h1>ЗАЯВКА ПРИНЯТА</h1>
          <p>Держите телефон под рукой. Скоро с Вами свяжется наш менеджер. </p>
        </div>
        <QrCode />
      </div>
    </div>
  );
};
