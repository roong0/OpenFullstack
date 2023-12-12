import Part from "./Part"

const Content = (props) => {
  let retArr = [];
  for (let part of props.parts) {
    retArr.push(<Part part={part.name} numExes={part.exercises} />)
  }
  return (
      retArr
    )
  }
  
  export default Content
