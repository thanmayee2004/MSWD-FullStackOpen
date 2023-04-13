import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No Feedback Provided</p>
            </div>
        )
    }

    const calculateAll = () => good + neutral + bad;

    const calculateAverage = () => {
        let total = calculateAll();
        return ((good - bad)/total).toFixed(1);
    }

    const calculatePositive = () => {
        let total = calculateAll();
        return (good/total*100).toFixed(1) + ' %';
    }

    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <Statistic text="Good" value={good} />
                    <Statistic text="Neutral" value={neutral} />
                    <Statistic text="Bad" value={bad} />
                    <Statistic text="All" value={calculateAll()} />
                    <Statistic text="Average" value={calculateAverage()} />
                    <Statistic text="Positive" value={calculatePositive()} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedbackReceived = (feedback) => () => {
        if (feedback === "good") {
            setGood(good + 1);
        } else if (feedback === "neutral") {
            setNeutral(neutral + 1);
        } else if (feedback === "bad") {
            setBad(bad + 1);
        }
    }

    return (
        <div>
            <h1>Unicafe Feedback</h1>
            <h2>Give Feedback</h2>
            <Button handleClick={feedbackReceived("good")} text="Good"/>
            <Button handleClick={feedbackReceived("neutral")} text="Neutral"/>
            <Button handleClick={feedbackReceived("bad")} text="Bad"/>
            <hr />
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById('root')
);
