#!/usr/bin/env node
import ora from "ora";
import cliSpinners from "cli-spinners";
import chalk from "chalk";
import logSymbols from "log-symbols";
import marquee from "marquee-ora";
// https://github.com/SamVerschueren/listr

const spinner = ora(
  `${logSymbols.info} Loading ${chalk.red("unicorns")}`
).start();

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
}, 1000);

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading earth";
  spinner.spinner = cliSpinners.earth;
}, 2000);

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading moon";
  spinner.spinner = cliSpinners.moon;
}, 3000);

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
  // MAKE YOUR OWN!!
  spinner.spinner = {
    interval: 80,
    frames: ["1", "2", "3", "4", "5"],
  };
}, 4000);

setTimeout(() => {
  spinner.color = "yellow";
  spinner.spinner = marquee({
    text: "Yay! Some scrolling text!",
    fullTextFrames: 15,
    interval: 50,
  });
}, 5000);

setTimeout(() => {
  spinner.stop();
  process.exit();
}, 7000);
