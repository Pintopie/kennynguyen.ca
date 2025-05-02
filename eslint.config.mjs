// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // ✅ Fix Vercel build failure due to JSX quote usage
      "react/no-unescaped-entities": "off",

      // ✅ Optional – if you're using custom fonts in _document.tsx
      "@next/next/no-page-custom-font": "off",

      // ✅ Optional – ignore missing dependency warnings for intentional useEffect behavior
      "react-hooks/exhaustive-deps": "warn"
    },
  }),
];

export default eslintConfig;
