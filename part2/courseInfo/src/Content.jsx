import Part from "./Part"

const Content = (props) => {
    return (
      <div>
        {props.course.parts.map(part => 
          <Part text={part.name} value={part.exercises} key={part.id}/>
        )}
      </div>
    )
  }

  export default Content