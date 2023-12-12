const Total = (props) => {
    let val = 0;
    for (let part of props.parts) {
      val = val + part.exercises;
    }
    return (
      <div>
        <p>Number of exercises {val}</p>
      </div>
    )
  }
  
  export default Total