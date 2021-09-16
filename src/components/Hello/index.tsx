import * as React from 'react';
import { HelloContainer, Button } from './Hello';

interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

type exclamationMarks = string | string[];

function getExclamationMarks(numChars: number): exclamationMarks {
  return Array(numChars + 1).join('!');
}

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props){
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <HelloContainer className="hello">
      <Button className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Button>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </HelloContainer>
  );
}

export default Hello;