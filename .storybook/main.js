module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials", // actions, backgrounds, controls, docs, viewport, toolbars
    "@storybook/addon-actions",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
  ]
}