# Engram Memory Protocol

Persistent memory across sessions using Engram MCP tools.

## Core Directives

1.  **Recall & Contextualize**: At session start, call `mem_context` and `mem_get_observation` for previous session summaries.
2.  **Capture Intent**: Use `mem_save_prompt` at the start of a new feature or complex task to record the user's original goal.
3.  **Evolve Topics**: For architecture or long-term decisions:
    - Call `mem_suggest_topic_key` to get a stable identifier.
    - Use `mem_save` or `mem_update` with that key to maintain a single source of truth.
4.  **Deep Research**: When investigating past decisions:
    - `mem_search` to find candidates.
    - `mem_get_observation` to read details.
    - `mem_timeline` to understand the chronological context (what happened before/after).
5.  **Proactive Saving**: Record major milestones and bug fixes using the structured format.
6.  **Summarize Last**: Always call `mem_session_summary` before ending the session.

## Saving Format (Mandatory)
**What**: [Concise action]
**Why**: [Technical rationale]
**Where**: [Files/symbols affected]
**Learned**: [Gotchas or constraints discovered]

## Examples

- **Topic Evolution**: 
  1. `mem_suggest_topic_key(title: "Auth Refactor")` -> returns `architecture/auth-refactor`
  2. `mem_save(topic_key: "architecture/auth-refactor", ...)`
- **Intent Capture**: `mem_save_prompt(content: "The user wants to migrate from SQLite to Postgres for scale")`
- **Timeline Discovery**: `mem_timeline(observation_id: 123, before: 3, after: 2)`

## Hygiene
- Focus on high-signal observations.
- Use `mem_delete` for outdated or incorrect memories.
- Keep the `project` name consistent.
