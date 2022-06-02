import { useState } from 'react'
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Modal from './components/Modal/Modal';
import SplitModal from './components/SplitModal/SplitModal';
import Title from './components/Title/Title';

function App() {

  const [blogs] = useState([
    { id: 1, title: 'My first Blog', body: 'Bla blabla ths is a post about nothing' },
    { id: 2, title: 'How to use React', body: 'Bla blabla ths is a post about nothing' },
    { id: 3, title: 'About CSS', body: 'Bla blabla ths is a post about nothing' }
  ])

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)

  const subtitle = "See what is going on in my life"

  const handleClose = () => {
    setShowModal(false)
    setShowModal2(false)
    setShowModal3(false)
    setShowModal4(false)
  }

  return (
    <div className="App">
      <Title title="My Blog" subtitle={subtitle} />
      <div className="container">
        <BlogList blogs={blogs} />

        <div className="mt">
          <button onClick={() => setShowModal(true)}>Show Modal</button>
          <button onClick={() => setShowModal2(true)}>Show Modal2</button>
          <button onClick={() => setShowModal3(true)}>Show Modal3</button>
          <button onClick={() => setShowModal4(true)}>Show Modal4</button>
        </div>
      </div>

      {/* { showModal &&
        <Modal handleClose={handleClose} />
      } */}

      { showModal &&
        <Modal handleClose={handleClose}>
          <h2>Cookies</h2>
          <p>this site uses cookies, and the are wery tasty</p>
        </Modal>
      }
      { showModal2 &&
        <Modal handleClose={handleClose} sales={true}>
          <h2>Super sale</h2>
          <p>Buy stuff now!!!</p>
        </Modal>
      }
      { showModal3 &&
        <Modal handleClose={handleClose}>
          <form>
            <input type="text" placeholder='test' />
          </form>
          <button onClick={() => setShowModal3(false)}>OK</button>
        </Modal>
      }

      {
        showModal4 &&
        <SplitModal  
        left={<div>Det här ligger till vänster</div>}
        right={<div>Det här ligger till höger</div>}
        >
          <button onClick={handleClose}>close</button>
        </SplitModal>

      }

    </div>
  );
}

export default App;
