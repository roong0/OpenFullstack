const Total = (props) => {
    let val = props.part1.exercises+props.part2.exercises+props.part3.exercises;
    return (
      <div>
        <p>Number of exercises {val}</p>
      </div>
    )
  }
  
  export default Total