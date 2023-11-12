import { useState } from 'react';
import './style.css';
import Question from './Components/Question';
import Thanks from './Components/Thanks';

function App(){
  const [ rate, setRate ] = useState(0);
  const [ submited, setSubmited ] = useState(false);
  const btns = [1, 2, 3, 4, 5];

  return (
    <>
      {submited === false && <Question rate={rate} setRate={setRate} setSubmited={setSubmited} btns={btns} submited={submited} />}

      {submited === true && <Thanks rate={rate} btns={btns} submited={submited} setSubmited={setSubmited} />}
    </>
  )
  
}

export default App