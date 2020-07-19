jest.mock('../internal/getVisibleElementHeight');

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AmbientProvider } from '../AmbientProvider';
import { useAmbient } from '../useAmbient';
import { getVisibleElementHeight } from '../internal/getVisibleElementHeight';

const defaultBgStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  transition: `opacity 0.4s ease-in-out`,
};

const defaultSectionStyle = {
  height: '600px',
  width: '100%',
};

function AmbientSection({
  sectionKey,
  color,
  background,
}: {
  sectionKey: string;
  color: string;
  background: string;
}) {
  const [props, { renderBackground, activeData }] = useAmbient({
    key: sectionKey,
    getWrapperProps: ({ active }) => ({
      active,
      style: {
        backgroundColor: background,
      },
      'data-testid': `${sectionKey}-bg`,
    }),
    data: { color },
  });

  return (
    <div
      {...props}
      style={{ ...defaultSectionStyle, color: activeData?.color }}
      data-testid={sectionKey}
    >
      {renderBackground()}
      <p>This is section {sectionKey}</p>
    </div>
  );
}

describe('AmbientProvider component', () => {
  beforeEach(() => {
    global.innerHeight = 800;
    jest.useFakeTimers();
  });

  it('changes backgrounds on scroll', async () => {
    // mock initial element positions
    (getVisibleElementHeight as jest.Mock)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0);

    const result = render(
      <AmbientProvider
        backgroundElementProps={
          { 'data-testid': 'background-container' } as any
        }
      >
        <AmbientSection sectionKey="one" background="blue" color="white" />
        <AmbientSection sectionKey="two" background="red" color="yellow" />
        <AmbientSection sectionKey="three" background="green" color="blue" />
      </AmbientProvider>
    );

    expect(result.getByTestId('background-container').childElementCount).toBe(
      3
    );
    // all bgs should have their correct bg color and opacity
    // based on active section
    expect(result.getByTestId('one-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 1,
      backgroundColor: 'blue',
    });
    expect(result.getByTestId('two-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'red',
    });
    expect(result.getByTestId('three-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'green',
    });
    // all sections should have the foreground color of the active
    // section's data.
    expect(result.getByTestId('one')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'white',
    });
    expect(result.getByTestId('two')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'white',
    });
    expect(result.getByTestId('three')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'white',
    });

    // mock scroll a bit
    global.document.documentElement.scrollTop = 800;
    (getVisibleElementHeight as jest.Mock)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0.2);
    fireEvent.scroll(global.document);
    act(() => {
      jest.runAllTimers();
    });

    // all bgs should have their correct bg color and opacity
    // based on active section
    expect(result.getByTestId('one-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'blue',
    });
    expect(result.getByTestId('two-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 1,
      backgroundColor: 'red',
    });
    expect(result.getByTestId('three-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'green',
    });
    // all sections should have the foreground color of the active
    // section's data.
    expect(result.getByTestId('one')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'yellow',
    });
    expect(result.getByTestId('two')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'yellow',
    });
    expect(result.getByTestId('three')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'yellow',
    });

    // mock scroll to end
    global.document.documentElement.scrollTop = 1600;
    (getVisibleElementHeight as jest.Mock)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(1);
    fireEvent.scroll(global.document);
    act(() => {
      jest.runAllTimers();
    });

    // all bgs should have their correct bg color and opacity
    // based on active section
    expect(result.getByTestId('one-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'blue',
    });
    expect(result.getByTestId('two-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 0,
      backgroundColor: 'red',
    });
    expect(result.getByTestId('three-bg')).toHaveStyle({
      ...defaultBgStyle,
      opacity: 1,
      backgroundColor: 'green',
    });
    // all sections should have the foreground color of the active
    // section's data.
    expect(result.getByTestId('one')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'blue',
    });
    expect(result.getByTestId('two')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'blue',
    });
    expect(result.getByTestId('three')).toHaveStyle({
      ...defaultSectionStyle,
      color: 'blue',
    });
  });
});
