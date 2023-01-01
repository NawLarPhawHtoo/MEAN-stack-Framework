import App from "./app";

(async () => {
  const app = new App();

  const terminate = async (signal: NodeJS.Signals) => {
    await app.terminate(signal);
    process.exit(0);
  };

  process.on("SIGTERM", terminate);
  process.on("SIGINT", terminate);

  await app.start();
})();