import Chessboard from 'chessboardjsx';
import React from 'react';
import Container from 'react-bootstrap/Container';

import Section from './Section';
import SectionHeader from './SectionHeader';

function HeroSection(props) {
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
        <Chessboard position="start" />
      </Container>
    </Section>
  );
}

export default HeroSection;
