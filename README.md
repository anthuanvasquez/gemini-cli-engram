# Engram Extension for Gemini CLI

This extension integrates [Engram](https://github.com/Gentleman-Programming/engram) with Gemini CLI to provide long-term persistent memory between sessions.

## Features

- **Persistent Memory:** Save discoveries, architectural decisions, and bug fixes.
- **Session Context:** Automatically retrieves context from previous sessions at startup.
- **Memory Protocol:** Built-in instructions (`GEMINI.md`) that guide the agent on what and when to save.
- **Automated Hooks:** Startup and shutdown notifications to ensure memory hygiene.
- **Custom Commands:** Directly interact with your memory from the CLI.

## Requirements

- [Engram](https://github.com/Gentleman-Programming/engram) must be installed on your system and available in your `PATH`.

## Installation

To link this extension locally from the project root:

```bash
gemini extensions link .
```

## Custom Commands

Once linked, you can use these commands directly in your terminal:

- **`gemini mem:stats`**: Show general statistics of your Engram memory.
- **`gemini mem:search "query"`**: Perform a full-text search across all your saved memories.
- **`gemini mem:context [project]`**: Show the most recent context and summaries for a specific project.

## How it Works

When a session starts, the extension:
1.  Activates the Engram MCP server.
2.  Loads the memory protocol from `GEMINI.md`.
3.  Executes a `SessionStart` hook that displays current Engram statistics.

During the session, the agent will follow the rules defined in the protocol to save relevant information using `mem_save` and retrieve context using `mem_context`.

At the end of the session, the agent will be reminded to save a summary (`mem_session_summary`).
