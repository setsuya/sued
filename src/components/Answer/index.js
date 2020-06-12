import React from 'react';

import { Answers, Line, User, Text } from './styles.js';

export default function Answer({ question = '', answer = '' }) {
  // return (
  //   <Answers>
  //     <p><span>[{new Date().toLocaleTimeString()}] Você:</span> {question}</p>
  //     <p><span>[{new Date().toLocaleTimeString()}] sueD:</span> {answer}</p>
  //   </Answers>
  // );
  return (
    <Answers>
      <Line>
        <User>
          [{new Date().toLocaleTimeString()}] Você:
        </User>
        <Text>{question}</Text>
      </Line>
      <Line>
        <User>
          [{new Date().toLocaleTimeString()}] sueD:
        </User>
        <Text>{answer}</Text>
      </Line>
    </Answers>
  );
}
