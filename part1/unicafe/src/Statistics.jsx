import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
    let averageScore = (props.good-props.bad)/(props.good+props.neutral+props.bad);
    let positive = props.good/(props.good+props.neutral+props.bad);
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
      return (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
        
      )
    }
    return (
      <div>
        <h1>statistics</h1>
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="average" value={averageScore}/>
        <StatisticsLine text="positive" value={positive}/>
      </div>
    )
  }
  export default Statistics