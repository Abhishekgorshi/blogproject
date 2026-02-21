import React, { useMemo } from 'react';

const Child = ({value}) => useMemo(() =>  {
  console.log("child rendered");
  return (
    <div>
      Child Component {value}
    </div>
  );
},[value])

export default Child;
