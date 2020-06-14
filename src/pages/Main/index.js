import React, { useState, useEffect } from 'react';

import { Container, Header, Question, Answers, Footer } from './styles.js';

import Answer from '../../components/Answer';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Main() {  
  const questions = [
    'Ó todo poderoso sueD que sabe de todas as coisas e tem o conhecimento infinito... Por favor me responda a seguinte pergunta:',
    'Nos abençoe com todo o seu conhecimento infinito sobre todos os assuntos existentes e por favor responda esta pergunta do seu humilde e curioso servo:',
    'Eu o reverencio, incrível sueD, e gostaria que você pudesse acabar com minha dúvida e me contasse o seguinte:',
    'Do alto de toda sua sabedoria, incrível sueD, por favor nos dê um pouco de seu conhecimento e responda minha humilde pergunta:',
    'Incrível sueD, por favor, seu admirador implora para que você responda minha pergunta e acabe com a minha curiosidade:',
  ];
  const defaultAnswers = [
    'Você não é digno de ter suas perguntas respondidas...',
    'Um mero mortal como você não pode compreender o poder que possuo.',
    'Não respondo perguntas de humanos inferiores...',
    'Quem ousa perturbar o poderoso sueD com perguntas tão insignificantes?',
    'Meu poder não será desperdiçado com perguntas tão tolas como as suas.',
    'Humano insignificante...',
    'Não desperdice meu tempo com suas tolices!',
  ];

  const [answers, setAnswers] = useState([<div key={Math.random()} id="dummyAnswer" />]);
  const [selectedQuestion, setSelectedQuestion] = useState(selectRandomQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState(selectRandomAnswer());
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerFinished, setAnswerFinished] = useState(true);

  useEffect(() => {
    document.getElementById('dummyAnswer').scrollIntoView(false);
  }, [answers]);

  function selectRandomQuestion() {
    return Math.floor((Math.random() * questions.length));
  }

  function selectRandomAnswer() {
    return Math.floor((Math.random() * defaultAnswers.length));
  }

  function checkQuestion(ev) {
    ev.persist();

    const pressedKey = ev.nativeEvent.data;
    let newAnswerFinished = answerFinished;

    if (pressedKey === '\\') {
      newAnswerFinished = !newAnswerFinished;
      setAnswerFinished(newAnswerFinished);
    }

    if (!newAnswerFinished) {
      ev.preventDefault();

      if (pressedKey !== '\\') {
        setAnswer(`${answer}${pressedKey}`);
      }

      if (ev.nativeEvent.inputType === 'deleteContentBackward') {
        setAnswer(answer.substring(0, (answer.length - 1)));
      }

      setQuestion(`${question}${questions[selectedQuestion][question.length]}`);
    } else {
      if (pressedKey !== '\\') {
        setQuestion(ev.target.value);
      } else {
        setQuestion(`${question}${questions[selectedQuestion][question.length]}`);
      }
    }
  }

  function answerQuestion(ev) {
    ev.persist();
    ev.preventDefault();

    let newAnswers = [...answers];

    newAnswers.splice(-1, 0, <Answer key={Math.random()} question={question} answer={answer || defaultAnswers[selectedAnswer]} />);

    setAnswers(newAnswers);
    setQuestion('');
    setAnswer('');
    setAnswerFinished(true);
    setSelectedQuestion(selectRandomQuestion());
    setSelectedAnswer(selectRandomAnswer());
  }

  return (
    <Container>
      <Header>
        sueD
      </Header>
      <Question>
        <form onSubmit={answerQuestion}>
          <Input onChange={checkQuestion} value={question} autoFocus />
          <Button type="submit" text="Perguntar" />
        </form>
      </Question>
      <Answers>
        {answers}
      </Answers>
      <Footer>
        <hr />
        Criado e hospedado no <img src="/github_logo.svg" alt="Github logo" /> por <a href="https://github.com/setsuya" target="_blank" rel="noopener noreferrer">Setsuya</a>. Última atualização em 10/06/2020.
      </Footer>
    </Container>
  );
}