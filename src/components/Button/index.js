import React from 'react';

import { CustomButton } from './styles.js';

export default function Button({ text = '', ...rest }) {
  return (
    <CustomButton {...rest}>
      {text}
    </CustomButton>
  );
}
