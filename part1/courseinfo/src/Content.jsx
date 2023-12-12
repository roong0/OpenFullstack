import Part from "./Part"

const Content = (props) => { 
    return (
      <div>
        <Part part={props.part1.name} numExes={props.part1.exercises} />
        <Part part={props.part2.name} numExes={props.part2.exercises} />
        <Part part={props.part3.name} numExes={props.part3.exercises} />
      </div>
    )
  }
  
  export default Content
