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

## Usage Tips

Getting started is easy, but there's a bit more to making a page with dynamic backgrounds than just changing the background.

### Reacting to the active content globally

You probably want to change some aspects of the current visible content based on the active background. For example, if one of your backgrounds is dark and the other is light, you want content to be visible with good contrast against _both_ while the user scrolls and transitions between them. How can that be done?

Good news, I thought of that! The trick is, each content component which you call `useAmbient` from can pass its own free-form user data. This data will be available to _every_ content component when they render. Once you it clicks, you'll find it's quite easy to share global data to all content components based on which one is active:

```jsx
// suppose we pass a 'color' prop to each section, indicating what its foreground color should be,
// and a 'background' prop, which tells what its background should be. as conscientious developers
// we have made sure there's a good contrast between these colors.
function Section({ color, background }) {
  // notice we're pulling out `activeData` from the return values
  const [props, { activeData, renderBackground }] = useAmbient({
    // let's pass our section's foreground color to `data` - now all sections
    // will know the foreground color of this section when it's the active one.
    data: { color },
  });

  return (
    // by pulling the color value from activeData, we are using the color
    // as specified by the currently active section, which presumably will
    // have the best contrast with the currently active background.
    <section {...props} style={{ color: activeData && activeData.color }}>
      {/* (just assume we have a ColorBackground component that renders a solid color here) */}
      {renderBackground(<ColorBackground background={background} />)}
      <p>Some content</p>
    </section>
  );
}
```

So in each `<Section>` we render (in this example), we're passing the foreground color to `data` - and when it renders, the `activeData` will have the appropriate foreground color, even if the rendered section isn't the one with the active background.

This feature can be used for more than just foreground color though. Put whatever data you want in there!

### Changing the transition animation

This library ships with a pretty reasonable fade transition by default, but maybe you want something fancier - or nothing at all. That's easy to do, just pass a `WrapperComponent` to `useAmbient`:

```jsx
import { Scale } from '@material-ui/core';

function Section() {
  const [props, { renderBackground }] = useAmbient({
    WrapperComponent: Scale,
    getWrapperProps: ({ active }) => ({ in: active }),
  });

  return (
    <section {...props}>
      {renderBackground(<BackgroundImage />)}
      Some content
    </section>
  );
}
```

In this example we're using the `Scale` transition component from `material-ui`. Neat!

If you don't want a transition at all, you can pass `null`.

Of course, if you've got your own component, it probably takes specific props to control the animation. That's where `getWrapperProps` comes in. Pass a function here which takes the current ambient state (`{ active: boolean; activeData: D; activeKey: string; }`, where `D` is the shape of whatever data you provide to `useAmbient`), and returns the props for your component.
