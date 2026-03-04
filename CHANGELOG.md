# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-04

### ✨ Added
- **Initial Implementation**: Core logic for the Engram MCP extension, enabling persistent long-term memory for Gemini CLI.
- **Custom CLI Commands**: Added native support for `mem stats`, `mem search`, and `mem context` directly from the CLI.
- **Engram Memory Protocol**: Defined the structured protocol for capturing intent, architectural decisions, and proactive saving.
- **Installation Support**: Added instructions and support for installing via URL and local linking.

### 🔧 Changed
- **Build System**: Migrated from `npm` to `pnpm` for faster, more efficient dependency management.
- **Tooling**: Updated `esbuild` and `typescript` to their latest versions for better performance and type safety.
- **Hooks Migration**: Refactored session hooks to TypeScript with automated bundling via `esbuild`.
- **Metadata**: Renamed extension to `gemini-cli-engram` for better alignment with the repository and purpose.

### 📝 Documentation
- Added comprehensive documentation for the Engram Memory Protocol.
- Added detailed installation and uninstallation guides in `README.md`.

### ⚖️ License
- Added MIT License.
