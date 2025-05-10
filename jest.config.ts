export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["C:/Users/carlo/OneDrive/Desktop/Pruebas/mars-overview/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "C:/Users/carlo/OneDrive/Desktop/Pruebas/mars-overview/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "C:/Users/carlo/OneDrive/Desktop/Pruebas/mars-overview/src/$1", // [optional] Are you using aliases?
  },
};