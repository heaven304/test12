import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

export default function App() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [data, setData] = useState([])


  const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


  const handleSubmit = () => {

    let obj = {
      name: name,
      email: email,
      password: pass,
      id: makeid(6)
    }

    setData([...data, obj])


  }




  return (
    <Container>
      <h1 className='mb-5'>Form</h1>
      Enter your Name: <input value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-4' />
      Enter your Email: <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control mb-4' />
      Enter your Password: <input value={pass} onChange={(e) => setPass(e.target.value)} className='form-control mb-4' />

      <button onClick={handleSubmit} className='btn btn-secondary'>Submit</button>

    </Container>




  )
}
