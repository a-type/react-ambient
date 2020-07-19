import * as React from 'react';
import { render } from '@testing-library/react';
import { Component } from '../Component';

describe('Component component', () => {
  it('renders children', () => {
    const result = render(<Component data-testid="component">Hi</Component>);

    expect(result.getByTestId('component')).toHaveTextContent('Hi');
  });
});
