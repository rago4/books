// https://github.com/vercel/next.js/discussions/12533
(() => {
  const themeConfig = {
    light: {
      "--background": "#fff",
      "--text": "#333",
      "--toggler": "#33333310",
    },
    dark: {
      "--background": "#333",
      "--text": "#fff",
      "--toggler": "#ffffff20",
    },
  };

  function setCssVar(property, color) {
    document.documentElement.style.setProperty(property, color);
  }

  function changeTheme(inputTheme) {
    let theme;

    switch (inputTheme) {
      case "dark":
        theme = themeConfig.dark;
        break;
      case "light":
      default:
        theme = themeConfig.light;
        break;
    }

    for (let key in theme) {
      setCssVar(key, theme[key]);
    }

    localStorage.setItem("theme", inputTheme);
  }

  try {
    const currentTheme = localStorage.getItem("theme") || "light";

    changeTheme(currentTheme);
    window.changeTheme = changeTheme;
  } catch (error) {
    console.error("Accessing theme has been denied");
  }
})();
