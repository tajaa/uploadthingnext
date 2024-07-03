// tailwind.config.js
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
export default withUt({
  // Your existing Tailwind config
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other content sources you have
  ],
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [
    // Your plugins
  ],
});
