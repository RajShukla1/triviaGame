
import React ,{useEffect,useState}  from 'react';
import './App.css';

const API_URL = "https://jservice.io/api/random";

function App() {

  const [correct,setCorrect] = useState(false);
  const [submitted,setSubmitted] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [pos,setPos] = useState(0);

  useEffect(()=>{
    setSubmitted(false);
    setCorrect(false);
    fetch(API_URL).then((res) => res.text())
    .then((data)=>{
     setQuestions(data.results);
    })
  },[questions[0]]);


  const checkResult = () =>{
    setPos(pos + 1);
    setSubmitted(true);
    let answer = document.getElementById("answer");
    if(answer.value === questions[pos].answer){
      setCorrect(true);
    }
    else
    setCorrect(false);
  }

  return (
    <div>  
      <h2>{questions[pos].question}</h2>
      <input type= "text" id = "answer"/>
      <button type = "submit" onClick={checkResult()}>submit</button>
      { submitted && (correct ? (<p>correct</p>) : (<p>incorrect</p>)) }
    </div>
    
  );
}

export default App;
