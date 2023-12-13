

const Statistics = (props) => {
    let all = (props.good+props.neutral+props.bad)
    let averageScore = (props.good-props.bad)/all;
    let positive = props.good/all;
    
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
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{props.good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{props.neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{props.bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{averageScore}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive*100}%</td>
                </tr>
            </tbody>
            
        </table> 

      </div>
    )
  }
  export default Statistics