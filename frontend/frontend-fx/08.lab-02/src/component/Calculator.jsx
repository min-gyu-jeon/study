import { useState } from 'react';
import styles from './Style.module.css';

// 연산자 사용하여 계산하는 알고리즘
const calculate = (op1, op2, action) => {  
    switch (action) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        case '*':
            return op1 * op2;
        case '/':
            return op2 === 0 ? NaN : op1 / op2;
        default:
            return op2;
    }
};

export default function Calculator() {
    const [display, setDisplay] = useState("0");
    const [operand, setOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [shouldReset, setShouldReset] = useState(false);

    //AC누르면 초기화
    const handleClear = () => {  
        setDisplay("0");
        setOperand(null);
        setOperator(null);
        setShouldReset(false);
    };

    const handleNumber = (num) => {
        if (display === "Error" || shouldReset) {
            setDisplay(num === "." ? "0." : num);
            setShouldReset(false);
        } else {
            if (num === ".") {
                if (!display.includes(".")) {
                    setDisplay(display + ".");
                }
            } else {
                if (display === "0") {
                    setDisplay(num);
                } else {
                    setDisplay(display + num);
                }
            }
        }
    };

    const handleOperator = (nextOperator) => {
        if (display === "Error") return;

        const currentValue = parseFloat(display);

        if (operator && !shouldReset) {
            const result = calculate(operand, currentValue, operator);
            if (isNaN(result) || !isFinite(result)) {
                setDisplay("Error");
                setOperand(null);
                setOperator(null);
                setShouldReset(true);
            } else {
                const cleanedResult = parseFloat(result.toFixed(10));
                setDisplay(String(cleanedResult));
                setOperand(cleanedResult);
                setOperator(nextOperator);
                setShouldReset(true);
            }
        } else {
            setOperand(currentValue);
            setOperator(nextOperator);
            setShouldReset(true);
        }
    };

    const handleCalculate = () => {
        if (operator === null || shouldReset || display === "Error") return;

        const currentValue = parseFloat(display);
        const result = calculate(operand, currentValue, operator);

        if (isNaN(result) || !isFinite(result)) {
            setDisplay("Error");
            setOperand(null);
            setOperator(null);
        } else {
            const cleanedResult = parseFloat(result.toFixed(10));
            setDisplay(String(cleanedResult));
            setOperand(null);
            setOperator(null);
        }
        setShouldReset(true);
    };

    return (
        <>
            <table className={styles.calculator}>
                <tbody>
                    <tr>
                        <td colSpan={4} className={styles.display}>
                            {display}
                        </td>
                    </tr>

                    <tr>
                        <td><button className={styles.btn} onClick={handleClear}>AC</button></td>
                        <td><button className={`${styles.btn} ${styles.operator}`} onClick={() => handleOperator("/")}>/</button></td>
                        <td><button className={`${styles.btn} ${styles.operator}`} onClick={() => handleOperator("*")}>×</button></td>
                        <td><button className={`${styles.btn} ${styles.operator}`} onClick={() => handleOperator("-")}>-</button></td>
                    </tr>

                    <tr>
                        <td><button className={styles.btn} onClick={() => handleNumber("7")}>7</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("8")}>8</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("9")}>9</button></td>
                        <td rowSpan={2}>
                            <button 
                                className={`${styles.btn} ${styles.operator}`} 
                                onClick={() => handleOperator("+")}
                            >
                                +
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td><button className={styles.btn} onClick={() => handleNumber("4")}>4</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("5")}>5</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("6")}>6</button></td>
                    </tr>

                    <tr>
                        <td><button className={styles.btn} onClick={() => handleNumber("1")}>1</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("2")}>2</button></td>
                        <td><button className={styles.btn} onClick={() => handleNumber("3")}>3</button></td>
                        <td rowSpan={2}>
                            <button className={`${styles.btn} ${styles.operator} ${styles.equal}`} onClick={handleCalculate}>=</button>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button 
                                className={styles.btn} 
                                style={{ width: '100%' }} 
                                onClick={() => handleNumber("0")}
                            >
                                0
                            </button>
                        </td>
                        <td><button className={styles.btn} onClick={() => handleNumber(".")}>.</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}