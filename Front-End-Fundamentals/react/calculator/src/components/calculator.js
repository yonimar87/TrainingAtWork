import React, {useState, useEffect} from 'react';
import button from './button';
import result from './result'
import './App.css';

const Calculator = () => {

    const [value, setValue] = useState(0);
    const [result, setResult] = useState(null);
    const [operator, setOperator] = useState(null);

    

    return(
        <div id="calculator"> 
            <ul>
                <li>{value}</li>
            </ul>
            <ul>
                <li onClick={() => setValue(value=0)}>AC</li>
                <li>+/-</li>
                <li onClick={() => setOperator(operator=`%`)}>%</li>
                <li onClick={() => setOperator(operator=`*`)}>/</li>
            </ul>
            <ul>
                <li onClick={() => setValue(value = 7)}>7</li>
                <li>8</li>
                <li>9</li>
                <li onClick={() => setOperator(operator=`*`)}>X</li>
            </ul>
            <ul>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li onClick={() => setOperator(operator=`-`)}>-</li>
            </ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li onClick={() => setOperator(operator=`+`)}>+</li>
            </ul>
            <ul>
                <li>0</li>
                <li>.</li>
                <li onClick={() => setResult=(result)}>=</li>
            </ul>
        </div>
    )
}

export default Calculator;
