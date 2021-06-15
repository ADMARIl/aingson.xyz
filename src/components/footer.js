import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IconGitHub, IconInstagram, IconLinkedin, IconLogo, IconTwitter } from '@components/icons';
import IconMail from './icons/mail';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { media, mixins, theme } from '@styles';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;

const Footer = () => {
  const [setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/ADMARIl/aingson.xyz')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  {name === 'GitHub' ? (
                    <IconGitHub />
                  ) : name === 'Linkedin' ? (
                    <IconLinkedin />
                  ) : name === 'Mail' ? (
                    <IconMail />
                  ) : name === 'Instagram' ? (
                    <IconInstagram />
                  ) : name === 'Twitter' ? (
                    <IconTwitter />
                  ) : (
                    <IconLogo />
                  )}
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabindex="-1">
        <div>
          <a href="https://aingson.xyz/">aingson.xyz</a> is made by{' '}
          <a href="mailto:aings1@umbc.edu">Andrew(me!)</a> with{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>. See it on{' '}
          <a href="https://github.com/ADMARIl/aingson.xyz">github</a>. &copy;{' '}
          {new Date().getFullYear()}
        </div>
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
