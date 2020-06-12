import React from 'react';

import { TextInput } from './styles.js';

export default function Input({ ...rest }) {
  return (
    <TextInput type="text" {...rest} />
  );
}
