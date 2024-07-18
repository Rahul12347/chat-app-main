
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://chat-app-backend-6xgn.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);
  return (
   <> 
      <Toaster/>
       <main >
        <Outlet/>
       </main>
   </>
  );
}

export default App;
