import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/UI/Footer';
import './App.css'

function App() {

  return (
    <>
      <header className="Header navbar border-bottom container-fluid">
        <div className="row ">
          <div className="col">
            <Nav className="navbar-expand-lg" />
          </div>
        </div>
      </header>
      <main className ='body'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
