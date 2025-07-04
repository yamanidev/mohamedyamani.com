/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          main: "var(--color-primary-main)",
        },
        text: {
          body: "var(--color-text-body)",
          bold: "var(--color-text-bold)",
          muted: "var(--color-text-muted)",
          code: "var(--color-text-code)",
          selection: "var(--color-text-selection)",
        },
        bg: {
          body: "var(--color-bg-body)",
          code: "var(--color-bg-code)",
          selection: "var(--color-bg-selection)",
        },
        border: {
          code: "var(--color-border-code)",
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              "text-decoration": "none",
              "background-repeat": "no-repeat",
              "background-size": "100% 1.5px",
              "background-position": "0 100%",
              "background-image":
                "linear-gradient(to right, var(--color-primary-main), var(--color-primary-main))",
              "&:hover": {
                color: "var(--color-primary-main)",
              },
            },
            "h1, h2, h3, h4, h5": {
              color: "var(--color-text-bold)",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            blockquote: {
              border: "none",
              position: "relative",
              width: "96%",
              margin: "0 auto",
              "font-size": "1.0625em",
              "padding-top": "1.5rem",
              "padding-bottom": "0.5rem",
              "padding-left": "1.5rem",
              "padding-right": "1.5rem",
            },
            "blockquote::before": {
              "font-family": "Arial",
              content: "'“'",
              "font-size": "4em",
              color: "var(--color-primary-main)",
              position: "absolute",
              left: "-10px",
              top: "-10px",
            },
            "blockquote::after": {
              content: "",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
        theme: {
          css: {
            "--tw-prose-body": "var(--color-text-body)",
            "--tw-prose-headings": "var(--color-text-bold)",
            "--tw-prose-lead": "var(--color-text-body)",
            "--tw-prose-links": "var(--color-text-body)",
            "--tw-prose-bold": "var(--color-text-bold)",
            "--tw-prose-counters": "var(--color-text-body)",
            "--tw-prose-bullets": "var(--color-text-body)",
            "--tw-prose-hr": "var(--color-text-muted)",
            "--tw-prose-quotes": "var(--color-text-body)",
            "--tw-prose-quote-borders": "var(--color-primary-main)",
            "--tw-prose-captions": "var(--color-primary-bold)",
            "--tw-prose-quote-captions": "var(--color-primary-bold)",
            "--tw-prose-code": "var(--color-text-code)",
            "--tw-prose-pre-code": "var(--color-text-code)",
            "--tw-prose-pre-bg": "var(--color-bg-code)",
            "--tw-prose-th-borders": "var(--color-text-muted)",
            "--tw-prose-td-borders": "var(--color-text-muted)",
          },
        },
      }),
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
