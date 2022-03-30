import React from 'react'

const Exercise = (props) => {

  const { parts } = props;
  const total = parts.reduce((a, b) =>  a += b.exercises, 0);

  return (
    <li>Total of {total} exercises</li>
  )
}

export default Exercise