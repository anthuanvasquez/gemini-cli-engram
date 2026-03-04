# Engram Memory Protocol

Persistent memory across sessions using Engram MCP tools.

## Core Directives

1.  **Recall First**: At session start, call `mem_context` (and `mem_search` if needed) to retrieve past decisions and progress.
2.  **Proactive Saving**: Record major milestones, architectural shifts, and tricky bug fixes immediately after completion.
3.  **Summarize Last**: Always call `mem_session_summary` before ending the session.

## Saving Format (Mandatory)
Use this structured format in `mem_save`:
**What**: [Concise action]
**Why**: [Technical rationale]
**Where**: [Files/symbols affected]
**Learned**: [Gotchas or constraints discovered]

## Examples

- **Recall Context**: `mem_context(project: "my-app")`
- **Search Memory**: `mem_search(query: "database migration pattern")`
- **Save Discovery**:
  `mem_save(title: "Fixed FTS5 syntax error", content: "**What**: Wrapped search terms in quotes\n**Why**: Special chars crash FTS5\n**Where**: store/db.go\n**Learned**: FTS5 MATCH requires sanitization")`

## Hygiene
- Focus on high-signal observations.
- Keep titles searchable and concise.
- Use the correct `project` name to keep memory segmented.
