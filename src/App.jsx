import { useState } from 'react'

import './App.css'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  const [book, setBook] = useState({
    id:"",
    title:"",
    cover:"",
    author:"",
    genre:"",

  })
const handleAdd={
  if(!id ||!title|| !cover||!author||!genre){
    alert("fill missing fields")
  }
  else{

  }
}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
    <div className='d-flex mt-5 mb-5 align-items-center'>
      <h2>Upload Book</h2>
      <button className='btn mb-2 ms-2 bg-warning'onClick={handleShow}><i class="fa-solid fa-upload fa-lg" style={{color: 'white'}}></i></button> 
    </div>
<Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add to Library</Modal.Title>
</Modal.Header>
<Modal.Body>
<FloatingLabel
        controlId="floatingInput"
        label="Book ID"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="ID" onChange={(e)=>setBook({...book,})} />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Title">
        <Form.Control type="text" placeholder="Title" onChange={(e)=>setBook({...setBook,title:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Cover">
        <Form.Control className="mb-3" type="text" placeholder="Cover" onChange={(e)=>setBook({...setBook,cover:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Author">
        <Form.Control className="mb-3" type="text" placeholder="Author" onChange={(e)=>setBook({...setBook,author:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Genre">
        <Form.Control className="mb-3" type="text" placeholder="Genre" onChange={(e)=>setBook({...setBook,Genre:e.target.value})}/>
      </FloatingLabel>
     

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary"onClick={handleAdd}>Add</Button>
</Modal.Footer>
</Modal>
</div>
   
    
     
    </>
  )
}

export default App
