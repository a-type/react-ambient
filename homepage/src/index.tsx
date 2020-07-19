import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from '../../src/index';

const App = () => {
  return (
    <main>
      <h1>react-typescript-library-template</h1>
      <section>
        <p>
          This is a template repo to streamline the creation of React libraries
          using Typescript and some other tools I like.
        </p>
        <p>
          Use the template repository to start your own library:{' '}
          <a href="https://github.com/a-type/react-typescript-library-template">
            Github
          </a>
        </p>
      </section>
      <section>
        <Component>Example component usage</Component>
      </section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
