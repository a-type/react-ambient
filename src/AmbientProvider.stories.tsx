import React from 'react';
import { AmbientProvider } from './AmbientProvider';
import { useAmbient } from './useAmbient';

export default {
  title: 'AmbientProvider',
};

function AmbientSection({
  sectionKey,
  background,
  color = 'black',
}: {
  sectionKey: string;
  background: string;
  color?: string;
}) {
  const [props, { renderBackground }] = useAmbient({
    getWrapperProps: ({ active }) => ({
      active,
      style: {
        backgroundColor: background,
      },
    }),
  });

  return (
    <div
      {...props}
      style={{
        height: '100vh',
        width: '100%',
        color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${color}`,
      }}
    >
      {renderBackground()}
      <p style={{ fontSize: 64, fontFamily: 'sans-serif' }}>
        This is section {sectionKey}
      </p>
    </div>
  );
}

export const Showcase = () => {
  return (
    <AmbientProvider>
      <AmbientSection sectionKey="one" background="#fe8081" />
      <AmbientSection sectionKey="two" background="#f0e030" />
      <AmbientSection sectionKey="three" background="#122232" color="white" />
    </AmbientProvider>
  );
};
