import type { StorybookConfig } from "@storybook/react/types";

/**
 * Comprehensive types are hard to find in 6.5...
 * https://github.com/storybookjs/storybook/blob/v6.5.14/examples/react-ts/README.md
 */
export const config: StorybookConfig = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],

  /** @see https://storybook.js.org/docs/react/configure/overview#feature-flags */
  features: {
    /** Configures Storybook to load stories on demand, rather than during boot up */
    storyStoreV7: true,
    emotionAlias: false
  }

  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   /**
  //    * https://github.com/chakra-ui/chakra-ui/blob/main/tooling/storybook-addon/README.md
  //    * https://github.com/styleguidist/react-docgen-typescript/blob/master/src/parser.ts#L84
  //    */
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       // speeds up storybook build time
  //       allowSyntheticDefaultImports: false,

  //       // speeds up storybook build time
  //       esModuleInterop: false,
  //     },

  //     /** makes union prop types like variant and size appear as select controls */
  //     shouldExtractLiteralValuesFromEnum: true,

  //     /** makes string and boolean types that can be undefined appear as inputs and switches */
  //     shouldRemoveUndefinedFromOptional: true,

  //     /** Filter out third-party props from node_modules except @mui / @chakra packages */
  //     propFilter: (prop) =>
  //       prop.parent
  //         ? !/node_modules\/(?!@mui|@chakra)/.test(prop.parent.fileName)
  //         : true,
  //   },
  // },
};
