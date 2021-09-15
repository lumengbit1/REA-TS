import * as React from 'react';
import { HelloContainer, Button } from './Hello';

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
    <HelloContainer className="hello">
      <Button className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Button>
    </HelloContainer>
  );
}

export default Hello;