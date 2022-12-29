// import { theme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

  /**
   * Prefer loading the Docs tab initially, rather than Canvas
   * @see https://github.com/storybookjs/storybook/issues/12111
   */
  viewMode: "docs",

  /**
   * Set default layout param (can be overridden on a per component/story basis)
   *
   * > - centered: center the component horizontally and vertically in the Canvas
   * > - fullscreen: allow the component to expand to the full width and height of the Canvas
   * > - padded: (default) Add extra padding around the component
   * @see https://storybook.js.org/docs/react/configure/story-layout
   */
  layout: "centered",

  /** https://chakra-ui.com/getting-started/with-storybook */
  // chakra: {
  //   theme
  // },

  backgrounds: {
    // prevent a default conflicting with Chakra/Mui on hot-module-reload
    default: false
  }
};
