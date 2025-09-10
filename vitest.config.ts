import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // Exclude irrelevant directories and config files from test runs
    exclude: [
      'postgres_data/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    // Note: To exclude files from coverage reports, use the coverage.exclude option below.
  },
});
