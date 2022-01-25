// @ts-ignore
import InputMask from "react-input-mask";
import React, { useState } from "react";
import { QrCode } from "./QuCode";

interface InputProps {
  result: () => void;
}

export const Input: React.FC<InputProps> = ({ result }) => {
  const [inputValue, setInputValue] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const handleClickNumber = (event: any) => {
    if (inputValue.length <= 9) {
      setInputValue((prevState) => prevState + event.target.innerText);
    }
  };

  const handleClickCheckBox = () => {
    setCheckBox(!checkBox);
  };

  const handleClickClear = () => {
    setInputValue("");
  };

  const handleSendInfo = () => {
    console.log({ inputValue, checkBox });
    result();
  };

  return (
    <div className="intro__content">
      <div className="container">
        <div className="mobile">
          <div className="mobile__top">
            <h4>Введите ваш номер мобильного телефона</h4>
            <InputMask
              disabled
              className="input-mask"
              mask="+7(999)999-99-99"
              alwaysShowMask={true}
              value={inputValue}
            />
            <p>и с Вами свяжется наш менеджер для дальнейшей консультации</p>
          </div>
          <div className="mobile__numbers">
            <button onClick={handleClickNumber}>1</button>
            <button onClick={handleClickNumber}>2</button>
            <button onClick={handleClickNumber}>3</button>
            <button onClick={handleClickNumber}>4</button>
            <button onClick={handleClickNumber}>5</button>
            <button onClick={handleClickNumber}>6</button>
            <button onClick={handleClickNumber}>7</button>
            <button onClick={handleClickNumber}>8</button>
            <button onClick={handleClickNumber}>9</button>
            <button className="number__clear" onClick={handleClickClear}>
              СТЕРЕТЬ
            </button>
            <button onClick={handleClickNumber}>0</button>
          </div>
          <div className="mobile__checkbox">
            <div className="checkbox">
              <input
                id="checkbox"
                type="checkbox"
                checked={checkBox}
                onChange={handleClickCheckBox}
              />
              <label htmlFor="checkbox">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              Согласие на обработку персональных данных
            </div>
          </div>
          <div className="mobile__button">
            <button
              className={inputValue.length !== 10 || !checkBox ? "disable" : ""}
              disabled={inputValue.length !== 10 || (!checkBox && true)}
              onClick={handleSendInfo}
            >
              Подтвердить номер
            </button>
          </div>
        </div>
        <QrCode />
      </div>
    </div>
  );
};
