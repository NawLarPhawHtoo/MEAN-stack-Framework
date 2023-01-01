import Server from "./server";

class App {
  private server: Server;

  constructor() {
    this.server = new Server;
  }
  start() {
    this.server.start();
  }

  async terminate(signal: NodeJS.Signals) {
    await this.server.stop();
    process.exit(0);
  }
}

export default App;
