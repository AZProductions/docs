import { Card, useTheme } from '@geist-ui/core';
import React from 'react';

function Sidemenu() {
  const theme = useTheme();

  return (
    <Card
      style={{
        background: theme.palette.accents_1,
        height: '100%',
        borderRadius: '0',
        width: '250%',
        borderTop: 'none',
        borderBottom: 'none'
      }}
    >
      <p>sidemenu</p>
    </Card>
  );
}

export default Sidemenu;
