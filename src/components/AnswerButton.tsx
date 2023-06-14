import React from 'react';
import styled from 'styled-components';

import {AnswerStateObj} from '../types/types';

type Props = {
    answer: AnswerStateObj;
    isDisabled: boolean;
    showCurrentAnswer: boolean;
    ocClickHandler: (buttonKey: string) => void;
};

type StyleProps = {
    bgcColor: string;
    border: boolean;
};

const AnswerButton = ({answer, ocClickHandler, isDisabled, showCurrentAnswer}: Props) => {
    let bgcColor = '#454242';
    let border = false;
    
    if (answer.isChosen) {
        bgcColor = '#253196';
        border = true;
    }
    if (showCurrentAnswer) {
        if (answer.isCurrentAnswer) {
            bgcColor = '#1A992E';
        } else {
            bgcColor = '#931F1F';
        }
    }
    
    return (
        <Container
            bgcColor={bgcColor}
            border={border}
            disabled={isDisabled}
            onClick={() => {
                ocClickHandler(answer.answer);
            }}>
            {answer.answer}
        </Container>
    );
};

const Container = styled.button<StyleProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 280px;
  background-color: ${props => props.bgcColor};
  border-radius: 8px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  border: ${props => (props.border ? '5px solid blue' : null)};

  box-shadow: 0px 27px 34px rgba(0, 0, 0, 0.22), 0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346),
  0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985), 0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524),
  0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636);
`;

export default AnswerButton;
