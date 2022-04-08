import React from 'react';
import Part from './Part';
import Exercise from './Exercise';

const Content = ( props ) => {
  const { parts } = props;
  return (
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
        <Exercise parts={parts} />
      </ul>
  )
}

export default Content