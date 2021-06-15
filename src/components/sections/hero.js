import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { media, mixins, Section, theme } from '@styles';
import Typewriter from 'typewriter-effect';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const HelloContainerRed = styled(Section)`
  background-color: ${colors.helloRed};
  color: ${colors.white};
  ${media.desktop`width: 500px;`};
  ${media.tablet`width: 410px;`};
  ${media.phablet`width: 375px;`};
  ${media.phone`width: 280px;`};
  margin: 0 0 0px -9px;
  padding: 20px 50px 20px 20px !important;
`;
const HelloContainerwhite = styled(Section)`
  background-color: ${colors.white};
  margin: 0 0 10px -9px;
  padding: 20px 50px 5px 10px;
  ${media.desktop`
    width: 500px;
    padding: 20px 50px 5px 10px !important;`};
  ${media.tablet`
    width: 410px;
    padding: 20px 50px 5px 10px !important;`};
  ${media.phablet`
    width: 375px;
    padding: 20px 10px 5px 10px !important;`};
  ${media.phone`
    width: 280px;
    padding: 20px 10px 5px 10px !important;`};
  border-style: solid;
`;
const TypeFragment = styled(Section)`
  flex: 0 0 auto;
  padding: 0;
`;
const StyledOverline = styled.h1`
  color: ${colors.dark};
  margin: 0 0 0px 0px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  color: ${colors.dark};
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  display: flex;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 5px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>
      <HelloContainerRed>
        <i>{frontmatter.title}</i>
        {frontmatter.banner}
      </HelloContainerRed>
    </StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>
      <HelloContainerwhite>{frontmatter.name}</HelloContainerwhite>
    </StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>
      <TypeFragment>I ​</TypeFragment>
      <TypeFragment style={{ color: '#3168b1' }}>
        <Typewriter
            options={{
              strings: ['code', 'design', 'make', 'create', 'develop'],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
      </TypeFragment>
      <TypeFragment>​ things</TypeFragment>
    </StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>{frontmatter.contactText}</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
