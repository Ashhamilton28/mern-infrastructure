import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AuthPage from './pages/AuthPage';
import './App.css';
import NavBar from './components/NavBar';
import { getUser } from "./utilities/users-service"




function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {/* if user is true show new order page, else show authpage */}
     { user ? 
     <>
     <NavBar user={user} setUser={setUser} />
     <Routes>
        <Route path='/orders/new' element={ <NewOrderPage /> } />
        <Route path='/orders' element= {<OrderHistoryPage />} />
     </Routes>
     </>
     : 
     <AuthPage setUser={setUser}/>
     }
    </main>
  );
}

export default App;
