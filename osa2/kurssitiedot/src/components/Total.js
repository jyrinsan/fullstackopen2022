
const Total = ({parts}) => {
    const total = parts.reduce( (sum, part) => {
      console.log('reduce funktiossa', sum, part)
      return sum + part.exercises
    }, 0)
    console.log('total', total)
  
    return (
      <b>total of {total} exercises</b>
    )
  }

  export default Total;