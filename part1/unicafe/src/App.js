import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({text, value, icon, text1, value1}) => {
  return (
    <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}{icon} {text1} {value1}</td>
    </tr>
    </tbody>
  )
}

const Statistics = ({test}) => {
  if (test.total === 0 || isNaN(test.total)) {
    return (
      <></>
    )
  }
  return (
    <table>
      <StatisticLine text = "Good" value = {test.good} />
      <StatisticLine text = "Neutral" value = {test.neutral} />
      <StatisticLine text = "Bad" value = {test.bad} />
      <StatisticLine text = "All" value = {test.total} />
      <StatisticLine text = "Average" value = {test.average} text1 = "out of" value1 = {test.total} />
      <StatisticLine text = "Positive" value = {test.positive} icon = "%" />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  const total = good + neutral + bad;

  const test = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: ((good*1) + (bad*-1)/ total).toFixed(2),
    positive: ((good/total)*100).toFixed(2)
  }

  return (
    <div id="wrapper">
      <h1>Unicafe</h1>
      <h2>Please provide us with your feedback</h2>

      <div id="buttonContainer">
        <Button handleClick={goodClick} text = "Good"/>
        <Button handleClick={neutralClick} text = "Neutral"/>
        <Button handleClick={badClick} text = "Bad"/>
      </div>

      <Statistics test = {test} />

    </div>
  );
}

export default App;
