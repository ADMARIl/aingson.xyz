import React from 'react';
import PropTypes from 'prop-types';
import { IconCodepen, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from '@components/icons';
import IconMail from './mail';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Mail':
      return <IconMail />;
    default:
      return <IconGitHub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
