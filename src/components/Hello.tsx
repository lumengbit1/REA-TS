import * as React from 'react';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

type exclamationMarks = string | string[];

function getExclamationMarks(numChars: number): exclamationMarks {
  return Array(numChars + 1).join('!');
}

function Hello({name, enthusiasmLevel = 1}: Props){
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;