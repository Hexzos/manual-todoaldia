import httpServer from "http-server";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const firstPort = Number(process.env.PORT || 3000);
if (!Number.isInteger(firstPort) || firstPort < 1 || firstPort > 65535) {
  console.error("PORT debe ser un entero entre 1 y 65535.");
  process.exit(1);
}
let activeServer;
async function start(port) {
  const preview = httpServer.createServer({ root, cache: -1 });
  preview.server.once("error", async (error) => {
    if (error.code !== "EADDRINUSE") {
      console.error(`No se pudo iniciar el preview: ${error.message}`);
      process.exitCode = 1;
      return;
    }
    try {
      const response = await fetch(`http://127.0.0.1:${port}/src/`, {
        signal: AbortSignal.timeout(2000),
      });
      const local = await readFile(
        new URL("../src/index.html", import.meta.url),
        "utf8",
      );
      if (response.ok && (await response.text()) === local) {
        console.log(
          `\nEl manual ya tiene un preview activo.\nAbre http://localhost:${port}/src/\nNo es necesario iniciar otra instancia.\n`,
        );
        return;
      }
    } catch {
      /* El puerto pertenece a otro servicio o no responde por HTTP. */
    }
    if (port < Math.min(firstPort + 10, 65535)) {
      console.log(
        `Puerto ${port} ocupado por otro servicio; probando ${port + 1}.`,
      );
      await start(port + 1);
    } else {
      console.error(
        "No hay un puerto disponible. Define PORT o detén una instancia anterior.",
      );
      process.exitCode = 1;
    }
  });
  preview.listen(port, "127.0.0.1", () => {
    activeServer = preview;
    console.log(
      `\nManual Todoaldía: http://localhost:${port}/src/\nEdita HTML/CSS y recarga el navegador. Ctrl+C para detener.\n`,
    );
  });
}
process.on("SIGINT", () => activeServer?.close());
process.on("SIGTERM", () => activeServer?.close());
await start(firstPort);
