/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/getParentCommits.test.ts'],
    threads: false,
  },
});
