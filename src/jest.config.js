module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest", // Allows Jest to process both .js and .jsx files
  },
  moduleFileExtensions: ["js", "json", "vue"],
  transformIgnorePatterns: [
    "/node_modules/(?!axios)", // Ensures axios is not ignored during transformation
  ],
};
