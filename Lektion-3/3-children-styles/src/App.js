import { useState } from 'react'
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Modal from './components/Modal/Modal';
import Title from './components/Title/Title';

function App() {

  const [blogs] = useState([
    { id: 1, title: 'My first Blog', body: 'Bla blabla ths is a post about nothing' },
    { id: 2, title: 'How to use React', body: 'Bla blabla ths is a post about nothing' },
    { id: 3, title: 'About CSS', body: 'Bla blabla ths is a post about nothing' }
  ])

  const [showModal, setShowModal] = useState(false)

  const subtitle = "See what is going on in my life"

  return (
    <div className="App">
      <Title title="My Blog" subtitle={subtitle} />
      <div className="container">
        <BlogList blogs={blogs} />

        <div className="mt">
          <button onClick={() => setShowModal(true)}>Show Modal</button>
        </div>
      </div>

      { showModal &&
        <Modal />
      }

    </div>
  );
}

export default App;
