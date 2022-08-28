import React from "react";

const CreateUser = ({ name, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="계정명"
        name="name"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        placeholder="이메일"
        name="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default CreateUser;
