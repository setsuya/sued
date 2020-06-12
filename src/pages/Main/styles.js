import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  background-color: #1f1f1f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 30px;
  color: #bbb;
`;

export const Header = styled.div`
  text-align: center;
  color: #c33;
  font-size: 96px;
  font-family: 'Special Elite', cursive;
  text-shadow: 2px 2px 0 #111;
`;

export const Question = styled.div`
  text-align: center;
  padding: 0 0 20px 0;
`;

export const Answers = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  color: #bbb;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 15px;
`;

export const Footer = styled.div`
  padding-top: 15px;
  text-align: center;
  font: 13px Arial, sans-serif;
  text-shadow: 1px 1px 0 #111;

  hr {
    border: 1px solid #bbb;
    width: 60%;
    margin: 0 auto 5px auto;
  }

  img {
    height: 14px;
    vertical-align: text-top;
  }

  a {
    color: #c33;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;
