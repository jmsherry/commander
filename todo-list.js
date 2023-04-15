import { execa } from "execa";
import Listr from "listr";

const tasks = new Listr([
  {
    title: "Check node version",
    task: async () => {
      const { stdout } = await execa("node", ["-v"]);
      console.log(`Node version: ${stdout}`);
    },
  },
  {
    title: "Check npm version",
    task: async () => {
      const { stdout } = await execa("npm", ["-v"]);
      console.log(`NPM version: ${stdout}`);
    },
  },
  {
    title: "Success",
    task: () => new Promise((resolve, reject) => {
      setTimeout(resolve('bar'), 2000);
    }),
  },
  {
    title: "Failure",
    task: () => Promise.reject(new Error("Bar")),
  },
]);

tasks.run().catch((err) => {
  console.error(err);
});
