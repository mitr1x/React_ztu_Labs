import Form from "./components/feedbackForm";
import {useRef, useState} from 'react';

function App() {

  const email = useRef(null); 
  const subject = useRef(null); 
  const name = useRef(null); 
  const text = useRef(null); 

  return (
    <div className="App">
      <Form email={email} subject={subject} name={name} text={text}></Form>
    </div>
  );
}

export default App;
