interface HookResponse {
  decision: 'allow' | 'deny';
  systemMessage?: string;
  reason?: string;
}

function run() {
  const response: HookResponse = {
    decision: 'allow',
    systemMessage: "Session is ending. Remember to call 'mem_session_summary' via Engram to save the session context if you haven't already."
  };
  
  process.stdout.write(JSON.stringify(response) + '\n');
}

run();
