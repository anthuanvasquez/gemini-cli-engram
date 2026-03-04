const { execSync } = require('child_process');

try {
  // We can't easily call the MCP tools from a simple script because they expect JSON-RPC
  // But we can use the Engram CLI to verify it's working or get some initial info.
  const stats = execSync('engram stats').toString();
  
  // Output a message to the agent via systemMessage
  console.log(JSON.stringify({
    decision: "allow",
    systemMessage: `Engram session started. Current stats:
${stats}`
  }));
} catch (error) {
  // If engram fails, we still allow but warn
  console.log(JSON.stringify({
    decision: "allow",
    systemMessage: "⚠️ Engram session start failed. Make sure 'engram' binary is installed."
  }));
  console.error(error);
}
