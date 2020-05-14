import React from 'react'
import ReactDOM from 'react-dom'

const Header = (prop) => {
  return <>
    <h1>{prop.course}</h1>
  </>
}
const Content = (prop) => {
  return <>
    <p>
      {prop.part} {prop.exercises}
    </p>
  </>
}

const Total = (prop) => {
  return <>
    <h1>Total: {prop.total}</h1>
  </>
}

const App = () => {
  const course = 'Half Stack application development'
  const contentData = [{
    part: 'Fundamentals of React',
    exercises: 10
  }, {
    part: 'Using props to pass data',
    exercises: 7
  }, {
    part: 'State of a component',
    exercises: 14
  }]
  let total = contentData.reduce((prev, curr) => prev + curr.exercises, 0)

  return (
    <>
      <Header course={course} />
      {contentData.map((item, index) => {
        return <Content key={index} part={item.part} exercises={item.exercises} />
      })}
      <Total total={total}></Total>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

