import React, { useContext, useState } from 'react'
import Button from './Button';
import { CalculationContext } from './App';

const CalculatorButtons = () => {
    const {number, setNumber} = useContext(CalculationContext);
    const [pendingOperation, setPendingOperation] = useState(false);

    const handleEqual = () => {        
        setNumber(eval(number));
    }

    const handleClear = () => {
        setNumber(0);
    }

    const handleNumberInsertion = num => {
        if (number === 0) {
            setNumber(num);
        } else {
            setNumber(`${number}${num}`);
            setPendingOperation(false);
        }
    }

    const handleOperator = operator => {
        if (!pendingOperation) {
            setNumber(`${number} ${operator} `);
            setPendingOperation(true);
        }
    }

    return (
        <div id="buttonsContainer">
            <Button name="9" className="btn" onClick={() => handleNumberInsertion(9)}/>
            <Button name="8" className="btn" onClick={() => handleNumberInsertion(8)}/>
            <Button name="7" className="btn" onClick={() => handleNumberInsertion(7)}/>
            <Button name="6" className="btn" onClick={() => handleNumberInsertion(6)}/>
            <Button name="5" className="btn" onClick={() => handleNumberInsertion(5)}/>
            <Button name="4" className="btn" onClick={() => handleNumberInsertion(4)}/>
            <Button name="3" className="btn" onClick={() => handleNumberInsertion(3)}/>
            <Button name="2" className="btn" onClick={() => handleNumberInsertion(2)}/>
            <Button name="1" className="btn" onClick={() => handleNumberInsertion(1)}/>
            <Button name="0" className="btn" onClick={() => handleNumberInsertion(0)}/>
            <Button name="+" className="btn action-btn addition-btn" onClick={() => handleOperator('+')} />
            <Button name="-" className="btn action-btn subtract-btn" onClick={() => handleOperator('-')} />
            <Button name="x" className="btn action-btn multiply-btn" onClick={() => handleOperator('*')} />
            <Button name="/" className="btn action-btn divide-btn" onClick={() => handleOperator('/')} />
            <Button name="=" className="btn action-btn equal-btn" onClick={handleEqual}/>
            <Button name="Del" className="btn action-btn deletion-btn" onClick={handleClear} />
        </div>
    );
}

export default CalculatorButtons;
