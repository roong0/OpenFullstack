import Part from "./Part"

const Content = (props) => {
      const total = props.course.parts.reduce((s, p) => s+p.exercises,0);// Doesnt work unless has an initial value.
    return (
      <div>
        {props.course.parts.map(part => 
          <Part text={part.name} value={part.exercises} key={part.id}/>
        )}
        <b>total of {total} exercises</b>
      </div>
    )
  }

  export default Content