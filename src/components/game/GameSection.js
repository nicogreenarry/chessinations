import React from 'react';
import Container from 'react-bootstrap/Container';

import Game from './Game';
import Section from '../Section';
import SectionHeader from '../SectionHeader';

function GameSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="d-flex flex-column align-items-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        ></SectionHeader>
        <Game />
      </Container>
    </Section>
  );
}

export default GameSection;
