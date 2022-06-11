module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': {
          preserve: true,
          fallback: true,
        },
        'nesting-rules': true,
      },
      autoprefixer: {
        flexbox: true,
        grid: false,
      },
    },
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
    tailwindcss: {},
  },
};
