const Header = (prop) => {
  return (
    <h1>{prop.course.name}</h1>
  )
}

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.part.name} {prop.part.exercises}
      </p>
    </>
  )
} 

const Content = (prop) => {
  return (
    <>
        <Part part={prop.course.parts[0]}/>
        <Part part={prop.course.parts[1]}/>
        <Part part={prop.course.parts[2]}/>
    </>
  )
}

const Total = (prop) => {
  let total = prop.course.parts[0].exercises;
  total += prop.course.parts[1].exercises;
  total += prop.course.parts[2].exercises;

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App