import { useRef, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import UserList from "./component/UserList";
import CreateUser from "./component/CreateUser";

const GlobalStyle = createGlobalStyle`
body {
  background: #F2B29B; 
}
`;

const Outer = styled.div`
  width: 700px;
  height: 400px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "가나다",
      email: "gggg123@gmail.com",
    },
    {
      id: 2,
      name: "라마",
      email: "aaaa123@gmail.com",
    },
    {
      id: 3,
      name: "바하",
      email: "vvv123@gmail.com",
    },
  ]);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const { name, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 새 항목에서 사용 할 고유 id 를 관리하는 용도입니다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, user]); //기존 배열(복사본)에 새 항목 추가
    //setUsers(users.concat(user)) ==> 이 방법도 있음

    setInputs({
      name: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Outer>
      <GlobalStyle />
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </Outer>
  );
}

export default App;
