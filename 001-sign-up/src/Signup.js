import React, {useState, useEffect} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'
import Modal from './Components/Modal'
import './Signup.css';

const Signup = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const onSubmit = (e) => {
    setMounted(false)
    e.preventDefault()
  }
  return (
    <div className="App">
      <CSSTransition
      in={mounted}
      timeout={1000}
      classNames="alert"
      onExited={() => setMounted(true)}
      >
        <Modal onSubmit={onSubmit}/>
      </CSSTransition>
    </div>
  )
}

export default Signup;
