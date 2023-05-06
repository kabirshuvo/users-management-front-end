import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      
      <h1>Users Management Front-End </h1>
      <p>Total User = {users.length}</p>
      
    </>
  )
}

export default App
