import './App.css';
import {useState} from 'react';



const Questions=[
  {
    id:0,
    que:"What inspired you the most in the past week?",
    answer:'Java is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
},

{
  id:1,
  que:"If you could have dinner with any historical figure, who would it be and why?",
  answer:'C is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
},

{
  id:2,
  que:"What is a skill you've always wanted to learn but haven't had the chance to yet?",
  answer:'C++ is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
},
{
  id:3,
  que:"If you could visit any place in the world, where would you go and what would you do there?",
  answer:'Python is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
},

]

function App() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState(new Set());
  
function handleSingleSelection(questionId){
  setSelected(questionId === selected ? null : questionId)
}
  
function handleMultiSelection(questionId){

  const nextId = new Set(multiple);

  if(nextId.has(questionId)){
    nextId.delete(questionId);
  } else {
    nextId.add(questionId);
  }
  
  setMultiple(nextId);
}

  return (
    <div className='container'>
      <h1 onClick={()=> setMultiSelection(!multiSelection)}>Enable Multi Selection</h1>

      <ul className='questions'>
        {
          Questions.map((question,i) => (
            <li onClick={ ()=> { multiSelection ? handleMultiSelection(question.id) :  handleSingleSelection(question.id)}} key={question.id}>
              <h3>{i+1}.{question.que}</h3>
               {selected === question.id || multiple.has(question.id)   ? <p>{question.answer}</p> : null}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App; 