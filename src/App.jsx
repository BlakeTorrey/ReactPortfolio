import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/UI/Footer';
import './App.css'

function App() {

  return (
    <>
      <header className="Header navbar  border-bottom container-fluid">
        <div className="row ">
          <div className="justify-content-start col Name">
            <h2 className="headerNames ">
              Blake <span className='text-primary'>Torrey</span>
            </h2>
          </div>
          <div className="col">
            <Nav className="navbar-expand-lg" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
