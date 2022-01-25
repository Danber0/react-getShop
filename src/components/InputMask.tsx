// @ts-ignore
import InputMask from "react-input-mask";
import React, { Fragment, useState } from "react";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Fragment>
      <InputMask
        mask="+7 (999) 999-99-99"
        alwaysShowMask={true}
        value={inputValue}
        onChange={handleChangeInput}
      />
    </Fragment>
  );
};
