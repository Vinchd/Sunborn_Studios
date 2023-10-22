/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F4ECff",
        secondary: "#704634ff",
        tertiary: "#41450Cff",
        quaternary: "#EDE5D2",
      },
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
        ralewaylight: ["RalewayLight, sans-serif"],
        ralewaysemilight: ["RalewaySemiLight, sans-serif"],
      },
    },
  },
  plugins: [],
};
