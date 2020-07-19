import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AmbientProvider } from '../../src/index';
import { Section } from './Section';
import { FlashyBackground } from './backgrounds/FlashyBackground';

import './index.css';
import { RippleBackground } from './backgrounds/RippleBackground';

const App = () => {
  return (
    <AmbientProvider>
      <Section
        background={<RippleBackground />}
        color="var(--color-background)"
      >
        <h1>React Ambient</h1>
      </Section>
      <Section background={<FlashyBackground />}>
        <p>
          React Ambient provides an animated page background which changes based
          on the most visible content on the page. Just link up your content
          sections with the backgrounds you choose for them, and you're good to
          go.
        </p>
      </Section>
      <Section>
        <p>It really is easy to use. Check out the docs to see for yourself!</p>
        <div className="row">
          <a href="https://github.com/a-type/react-ambient">Github</a>
          <a href="https://a-type.github.io/react-ambient/storybook">
            Storybook
          </a>
          <a href="https://a-type.github.io/react-ambient/lib">Docs</a>
        </div>
      </Section>
    </AmbientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
