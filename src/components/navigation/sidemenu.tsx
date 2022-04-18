import { Card, Description, Link, Spacer, useTheme } from '@geist-ui/core';
import React from 'react';

function Sidemenu() {
  const theme = useTheme();

  return (
    <>
      <Card
        className="cardbg"
        style={{
          background: theme.palette.accents_1,
          height: '100%',
          borderRadius: '0',
          width: '250%',
          borderTop: 'none',
          borderBottom: 'none'
        }}
      >
        <Description
          title="Introductions"
          content={
            <>
              <Link color>Welcome</Link>
              <Spacer h={0.5}></Spacer>
              <Link>Downloads</Link>
              <Link>Getting Started</Link>
            </>
          }
        ></Description>
      </Card>
      <style jsx>{`
        cardbg {
          background: ${theme.palette.accents_2};
        }
      `}</style>
    </>
  );
}

export default Sidemenu;
