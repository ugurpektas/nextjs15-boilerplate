import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias kullanıyorsanız
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // CSS modüllerini mocklamak
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Görselleri mocklamak
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transformIgnorePatterns: [
    "node_modules/(?!dayjs)", // dayjs gibi ESM modüllerini dönüştürmek için ekledik
  ],
};

export default config;
