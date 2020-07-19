import * as React from 'react';
import { Component } from './Component';

export default {
  title: 'Component',
  component: Component,
};

export const Showcase = () => <Component>Hello</Component>;

Showcase.story = {
  name: 'Showcase',
};
