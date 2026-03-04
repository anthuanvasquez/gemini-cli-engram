import { execSync } from 'child_process';

interface HookResponse {
  decision: 'allow' | 'deny';
  systemMessage?: string;
  reason?: string;
}

function run() {
  try {
    const stats = execSync('engram stats').toString();
    
    const response: HookResponse = {
      decision: 'allow',
      systemMessage: `Engram session started. Current stats:\n${stats}`
    };
    
    process.stdout.write(JSON.stringify(response) + '\n');
  } catch (error) {
    const response: HookResponse = {
      decision: 'allow',
      systemMessage: "⚠️ Engram session start failed. Make sure 'engram' binary is installed."
    };
    
    process.stdout.write(JSON.stringify(response) + '\n');
    console.error(error);
  }
}

run();
