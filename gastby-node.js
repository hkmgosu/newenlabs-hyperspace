exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
        ],
      },
      plugins: [
        plugins.define({
          __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
      ],
    })
}