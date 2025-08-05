# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run build` - Compiles TypeScript to JavaScript (output: `dist/`)
- `npm run dev` - Runs TypeScript compiler in watch mode for development
- `npm run test` - Runs tests using Vitest

## Architecture Overview

This is a TypeScript implementation of core Lodash functionality, organized by category:

```
src/
├── array/          # Array manipulation functions (chunk, uniq, slice)
├── collection/     # Collection iteration functions (forEach, filter)  
├── function/       # Function utilities (bind, debounce)
├── lang/           # Type checking functions (isArray, isObject, isString)
├── object/         # Object manipulation (get, omit)
├── string/         # String utilities (camelCase, capitalize, endsWith)
├── util/           # General utilities (property, random, cloneDeep)
└── index.ts        # Main export file that re-exports all categories
```

Each category has its own `index.ts` that exports all functions in that category. Individual functions are implemented in their own directories (e.g., `array/chunk/index.ts`) with corresponding test files.

## TypeScript Configuration

- Target: ES2020 with NodeNext module resolution
- Strict mode enabled
- Outputs to `dist/` directory with type declarations
- Uses Vitest for testing framework

## Function Implementation Pattern

Functions follow a consistent pattern:
- Individual implementation in `category/functionName/index.ts`
- Export as default from the function file
- Re-export through category index files
- Test files alongside implementation (e.g., `index.test.ts`)

## Key Dependencies

- TypeScript for type safety and compilation
- Vitest for testing
- No runtime dependencies - pure TypeScript implementation