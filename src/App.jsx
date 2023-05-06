import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userInfo = {name, email}
    console.log(userInfo);

    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log('insde from post response', data);
      const newUsers = [...users, data]
      setUsers(newUsers);

      form.reset();
    })
  };

  return (
    <>
      <h1>Users Management Front-End </h1>
      <h3>Total User = {users.length}</h3>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name-field"></input> <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" name="submit" />
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} :{" "}
            <span style={{ fontWeight: "bold", color: "rebeccapurple" }}>
              {user.name}
            </span>{" "}
            {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
