module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
