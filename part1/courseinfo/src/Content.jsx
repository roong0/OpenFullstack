import Part from "./Part"

const Content = (props) => { 
    return (
      <div>
        <Part part={props.part1} numExes={props.exercises1} />
        <Part part={props.part2} numExes={props.exercises2} />
        <Part part={props.part3} numExes={props.exercises3} />
      </div>
    )
  }
  
  export default Content
