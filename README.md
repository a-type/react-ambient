# react-ambient

Dead-simple solution for changing the background dynamically based on the most prominent content.

[See the demo](https://a-type.github.io/react-ambient)

## Quick Start

### 1 Install

```
npm i --save react-ambient
```

### 2 Add provider

```jsx
import { AmbientProvider } from 'react-ambient';

function AppLayout() {
  return (
    <AmbientProvider>
      <YourPageView />
    </AmbientProvider>
  );
}
```

### 3 Add sections

```jsx
import { useAmbient } from 'react-ambient';

function Section({ backgroundContent, children }) {
  const [props, { renderBackground }] = useAmbient();

  return (
    <section {...props}>
      {renderBackground(backgroundContent)}
      {children}
    </section>
  );
}

function YourPageView() {
  return (
    <main>
      <Section backgroundContent={<FancyBackground />}>
        <p>Section content</p>
      </Section>
      <Section backgroundContent={<AdvertisingVideo />}>
        <p>Section content</p>
      </Section>
    </main>
  );
}
```

### 4 That's it!

You can find full typings for all exported tools in the [docs](https://a-type.github.io/react-ambient/lib). Or you can view another example in the [Storybook](https://a-type.github.io/react-ambient/storybook).
