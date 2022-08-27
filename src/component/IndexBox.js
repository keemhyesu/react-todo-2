import React, { useState } from "react";
import styled from "styled-components";

const IndexBox = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputValue;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onRemove = () => {
    setInputValue({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onRemove}>초기화</button>
      <div>
        값 :{name} ({nickname})
      </div>
    </div>
  );
};

export default IndexBox;
