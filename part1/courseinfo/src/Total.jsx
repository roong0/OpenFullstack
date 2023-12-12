const Total = (props) => {
    let val = props.v1+props.v2+props.v3;
    return (
      <div>
        <p>Number of exercises {val}</p>
      </div>
    )
  }
  
  export default Total