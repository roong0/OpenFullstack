const Total = (props) => {
    let val = 0;
    for (let part of props.course.parts) {
      val = val + part.exercises;
    }
    return (
      <div>
        <p>Number of exercises {val}</p>
      </div>
    )
  }
  
  export default Total