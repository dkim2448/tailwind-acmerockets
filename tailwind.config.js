/** @type {import('tailwindcss').Config} */
module.exports = {
  // explicit about where these files are:
  // content: ["./build/*.html", "./build/js/*.js"],

  // look inside of any folder that's in the build directory, then look for these html and js files. if you do only html within the {}, it doesn't work.
  content: ["./build/**/*.{html, js}"],
  theme: {
    // to prevent overwriting:
    extend: {
      colors: {
        // example: text-papayawhip, text-papayawhip-light, text-papayawhip-dark
        papayawhip: {
          light: "#fef4e4",
          // this would just be referenced as "papayawhip", you don't have to use papayawhip-DEFAULT:
          DEFAULT: "#ffefe5",
          dark: "#fee5bc",
        },
      },
      screens: {
        // width should be wider than it should be tall
        // min-aspect-ratio: 3/2 means the screen must be AT LEAST 3:2 wide-to-tall
        // (e.g. 1500px wide / 1000px tall = exactly 3/2 - anything wider than that qualifies)
        // think of it like min-width but for shape: "only apply if wide enough relative to height"
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },

        // we don't want this to be applied to anything larger than 65% (all the smaller ratios we do want it applied to)
        // max-aspect-ratio: 13/20 means the screen must be AT MOST 13:20 wide-to-tall
        // 13/20 = 0.65, so the screen must be taller than ~65% of its width to quality
        // (e.g. a portrait phone). anything wider than that ratio won't get these styles.
        // think of it like max-width but for shape: "only apply if tall enough relative to width"
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
