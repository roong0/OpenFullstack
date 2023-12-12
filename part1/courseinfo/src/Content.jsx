import Part from "./Part"

const Content = (props) => {
    let retArr = [];
    for (let part of props.course.parts) {
      retArr.push(<Part part={part.name} numExes={part.exercises} />)
    }
    return (
      retArr
    )
  }
  
  export default Content
