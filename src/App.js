import './App.css';
import React, {useState, useEffect} from "react";
import firebase from './firebase';
import Calculations from './Calculations';


function App() {

var [value, setValue] = useState("");
var [errorString, setErrorString] = useState("");
var [string, setString] = useState("");
var [x, setX] = useState(0);
var [y, setY] = useState(0);
var [operation, setOperation] = useState('');
var [answerField, setAnswerfield] = useState('');
var [dbComments, setdbComments] = useState('');
const [calculations, setCalculations] = useState([]);

const saveCalculation = (newString, newAnswer) => {
  const db = firebase.firestore();
  db.collection('calculations').add({
    string: newString,
    answer: newAnswer
  })
  console.log(newString);
  console.log(newAnswer);
}

const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection("calculations").get()
  setCalculations(data.docs.map(doc => ({...doc.data(), id: doc.id})))
}

useEffect(() => {
  fetchData();

}, [])


const Clear = () => {
    setValue("");
    setErrorString("");
    setString("");
    setX(0);
    setY(0);
    setOperation("")
    setAnswerfield("");
    fetchData();
    setdbComments("");
}

const NumClick = (n) => {
    if (value === 0)
        setValue(n)
    else
    {
        setValue(value *= 10);
        setValue(value += n);
    }

    if(x !== 0){
      setY(value);
    }
    console.log(`X equals ${x}`)
    console.log(`Y equals ${y}`)
}

const Plus = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('+');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Minus = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('-');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Multiply = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('*');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Square = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('^(2)');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Modulo = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('%');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Exponent = () => {
  if (operation !== ''){
    Equals();
  }else{
    setX(value)
    setValue("");
    setOperation('^(x)');
  }

  console.log(`X equals ${x}`)
  console.log(`Y equals ${y}`)
}

const Equals = () => {
  if (operation === '')
        return;

    console.log(`X equals ${x}`)
    console.log(`Y equals ${y}`)

    if (operation === '+')
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var j_ok = JSON.parse(this.response);
                setX(0);
                setY(0);
                setOperation('');
                setValue('');
                setString(j_ok.string);
                setAnswerfield(j_ok.answer);
                saveCalculation(j_ok.string, j_ok.answer);
                fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
                var j_error = JSON.parse(this.response);
                setX(0);
                setY(0);
                setOperation('');
                setErrorString(j_error.string);
            }
        };

        console.log(`X equals ${x}`)
        console.log(`Y equals ${y}`)

        xhttp.open("GET",`${process.env.REACT_APP_PROXY_ADD_URL}?x=${x}&y=${y}`, false);
        xhttp.send();

        return;
    }

    if (operation === '-')
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              var j_ok = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setValue('');
              setString(j_ok.string);
              setAnswerfield(j_ok.answer);
              saveCalculation(j_ok.string, j_ok.answer);
              fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
              var j_error = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setErrorString(j_error.message);
            }
        };

        xhttp.open("GET",`${process.env.REACT_APP_PROXY_SUB_URL}?x=${x}&y=${y}`, false);
        xhttp.send();

        return;
    }

    if (operation === '*')
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var j_ok = JSON.parse(this.response);
                setX(0);
                setY(0);
                setOperation('');
                setValue('');
                setString(j_ok.string);
                setAnswerfield(j_ok.answer);
                saveCalculation(j_ok.string, j_ok.answer);
                fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
                var j_error = JSON.parse(this.response);
                setX(0);
                setY(0);
                setOperation('');
                setErrorString(j_error.string);
            }
        };

        console.log(`X equals ${x}`)
        console.log(`Y equals ${y}`)

        xhttp.open("GET",`${process.env.REACT_APP_PROXY_MUL_URL}?x=${x}&y=${y}`, false);
        xhttp.send();

        return;
    }

    if (operation === '^(2)')
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              var j_ok = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setValue('');
              setString(j_ok.String);
              setAnswerfield(j_ok.Answer);
              saveCalculation(j_ok.String, j_ok.Answer);
              fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
              var j_error = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setErrorString(j_error.String);
            }
        };

        xhttp.open("GET",`${process.env.REACT_APP_PROXY_SQR_URL}?x=${x}`, false);
        xhttp.send();

        return;
    }

    if (operation === '%')
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              var j_ok = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setValue('');
              setString(j_ok.string);
              setAnswerfield(j_ok.answer);
              saveCalculation(j_ok.string, j_ok.answer);
              fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
              var j_error = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setErrorString(j_error.string);
            }
            if (this.readyState === 4 && this.status === 500) {
              var j_error500 = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setErrorString(j_error500.string);
            }
        };
        //?val=5&mod=3
        xhttp.open("GET",`${process.env.REACT_APP_PROXY_MOD_URL}?val=${x}&mod=${y}`, false);
        xhttp.send();

        return;
    }

    if (operation === '^(x)')
    {

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              var j_ok = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setValue('');
              setString(j_ok.string);
              setAnswerfield(j_ok.answer);
              saveCalculation(j_ok.string, j_ok.answer);
              fetchData();
            }

            if (this.readyState === 4 && this.status === 400) {
              var j_error = JSON.parse(this.response);
              setX(0);
              setY(0);
              setOperation('');
              setErrorString(j_error.error);
            }
        };
        //?num=4&exp=4
        xhttp.open("GET",`${process.env.REACT_APP_PROXY_EXP_URL}?num=${x}&exp=${y}`, false);
        xhttp.send();

        return;
    }





}




return (
    <div id="calculator">
    <div>WEB CALCULATOR</div>

    <div id="logo">
        Rossatron 3000
    </div>

    <div>
        <label>Function:</label>
        <input type="text" id="display" readOnly="1" value={value}/>
    </div>

    <div>
        <label>Answer:</label>
        <input type="text" id="Answer" readOnly="1" value={answerField}/>
    </div>

    <div>
        <label>String:</label>
        <input type="text" id="String" readOnly="1" value={string}/>
    </div>

    <div>
        <span id="error">{errorString}</span>
    </div>

    <div>
        <button className="calc1" onClick={() => NumClick(0)}>0</button>
        <button className="calc1" onClick={() => NumClick(1)}>1</button>
        <button className="calc1" onClick={() => NumClick(2)}>2</button>
        <button className="calc1" onClick={() => NumClick(3)}>3</button>
        <button className="calc1" onClick={() => NumClick(4)}>4</button>
    </div>

    <div>
        <button className="calc1" onClick={() => NumClick(5)}>5</button>
        <button className="calc1" onClick={() => NumClick(6)}>6</button>
        <button className="calc1" onClick={() => NumClick(7)}>7</button>
        <button className="calc1" onClick={() => NumClick(8)}>8</button>
        <button className="calc1" onClick={() => NumClick(9)}>9</button>        
    </div>

    <div>
        <button className="calc1" onClick={() => Minus()}>-</button>
        <button className="calc1" onClick={() => Plus()}>+</button>
        <button className="calc1" onClick={() => Multiply()}>*</button>
                     
        <button className="cancel" onClick={() => Clear()}>C</button>
    </div>

    <div>
        <button className="calc1" onClick={() => Exponent()}>^(x)</button>
        <button className="calc1" onClick={() => Modulo()}>%</button>
        <button className="calc1" onClick={() => Square()}>^(2)</button>
        <button className="calc1" onClick={() => Equals()}>=</button>   
    </div>

    <ul>
    <div>
        <span id="error">{dbComments}</span>
        <button onClick={() => Clear()}>Refresh DB</button>
    </div>
      {calculations.map(calculation => (
        <li key={calculation.id}>
          <Calculations calculation={calculation} setString={setString} setAnswerfield={setAnswerfield}
           setdbComments={setdbComments}/>
        </li>
      ))}
    </ul>

    </div>
    
  );
}

export default App;
