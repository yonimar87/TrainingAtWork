import React, {useState} from 'react';
import Button from '../button/button';

import './calculator.css'

const Calculator = () => {

    const [value, setValue] = useState("0");
    const [memory , setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const buttonHandler = content => () => {
        const num = parseFloat(value);

        if (content === "AC") {
            setValue("0");
            setMemory(null);
            setOperator(null);
            return
        }

        if (content === "±") {
            setValue((num *-1).toString())
            return;
        }
        if (content === "%") {
            setValue((num/100).toString())
            setMemory(null)
            setOperator(null)
            return
        }
        if (content === "+") {
            if (operator !== null) {
                if (operator === "+") {
                  setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                  setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                  setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                  setMemory(memory / parseFloat(value));
                }
              } else {
                setMemory(parseFloat(value));
              }
              setValue("0");
              setOperator("+");
              return;
        }
        if (content === "-") {
            if (operator !== null) {
                if (operator === "+") {
                  setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                  setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                  setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                  setMemory(memory / parseFloat(value));
                }
              } else {
                setMemory(parseFloat(value));
              }
              setValue("0");
              setOperator("−");
              return;
        }
        if (content === "x") {
            if (operator !== null) {
                if (operator === "+") {
                  setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                  setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                  setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                  setMemory(memory / parseFloat(value));
                }
              } else {
                setMemory(parseFloat(value));
              }
              setValue("0");
              setOperator("×");
              return;
        }
        if (content === "÷") {
            if (operator !== null) {
                if (operator === "+") {
                  setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                  setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                  setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                  setMemory(memory / parseFloat(value));
                }
              } else {
                setMemory(parseFloat(value));
              }
              setValue("0");
              setOperator("÷");
              return;
        }
        if (content === "=") {
            if (!operator) return;

            if (operator === "+") {
              setValue((memory + parseFloat(value)).toString());
            } else if (operator === "−") {
              setValue((memory - parseFloat(value)).toString());
            } else if (operator === "×") {
              setValue((memory * parseFloat(value)).toString());
            } else if (operator === "÷") {
              setValue((memory / parseFloat(value)).toString());
            }
            setMemory(null);
            setOperator(null);
            return;
        }

        if (value[value.length - 1] === ".") {
            setValue(value + content);
        } else {
            setValue(parseFloat(num + content).toString());
        }

    };

    return(
        <div className="calculator"> 
            <div className="topCalc">
                {value}
            </div>
            <div className="buttonCalc">
                <Button content="AC" type="function" onButtonClick={buttonHandler} />
                <Button content="±" type="function"  onButtonClick={buttonHandler} />
                <Button content="%" type="function"  onButtonClick={buttonHandler} />
                <Button content="÷" type="operator" onButtonClick={buttonHandler} />
                <Button content="7" onButtonClick={buttonHandler} />
                <Button content="8" onButtonClick={buttonHandler} />
                <Button content="9" onButtonClick={buttonHandler} />
                <Button content="x" type="operator" onButtonClick={buttonHandler} />
                <Button content="4" onButtonClick={buttonHandler} />
                <Button content="5" onButtonClick={buttonHandler} />
                <Button content="6" onButtonClick={buttonHandler} />
                <Button content="-" type="operator" onButtonClick={buttonHandler} />
                <Button content="1" onButtonClick={buttonHandler} />
                <Button content="2" onButtonClick={buttonHandler} />
                <Button content="3" onButtonClick={buttonHandler} />
                <Button content="+" type="operator" onButtonClick={buttonHandler} />
                <Button content="0" onButtonClick={buttonHandler} />
                <Button content="." onButtonClick={buttonHandler} />
                <Button content="=" type="operator" onButtonClick={buttonHandler} />
            </div>
        </div>
    )
}

export default Calculator;
