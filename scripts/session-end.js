// scripts/session-end.js
// Remind the agent to summarize the session if it hasn't already.

console.log(JSON.stringify({
  decision: "allow",
  systemMessage: "Session is ending. Remember to call 'mem_session_summary' via Engram to save the session context if you haven't already."
}));
