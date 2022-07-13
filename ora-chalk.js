import ora from "ora";
import chalk from "chalk";

const spinner = ora(`Loading ${chalk.red("unicorns")}`).start();

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
}, 1000);

setTimeout(() => {
  process.exit();
}, 2000);
