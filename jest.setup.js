// jest.setup.js
import { loadEnvConfig } from "@next/env";

const EnvConfig = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default EnvConfig;
