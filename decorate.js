#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";

const VERSION = '1.0.0';

const ASCII_ART = Object.freeze({
  TITS: Object.freeze([` ( • )( • ) `, ` ( • )( • ) `]),
  PENISES: Object.freeze([`- - - C===8 `, ` 8===D - - -`]),
});

const program = new Command();

program
  .name("text-decoration-util")
  .description("CLI to add some balls to a text file!!")
  .option('-v', 'version')
  .version(VERSION)
  .action(_ => console.log(VERSION));

program
  .command("decorate")
  .description("decorate with ascii")
  .argument("<path>", "path to file")
  .argument("<word>", "string to decorate")
  .option("--cocks", "decorate with penises")
  .option("--tits", "decorate with tits")
  .action((path, word, options) => {
    const str = fs.readFileSync(path, "utf8");
    let decorationR = "";
    let decorationL = "";
    if (options.tits) {
      decorationL = ASCII_ART.TITS[0];
      decorationR = ASCII_ART.TITS[1];
    } else if (options.cocks) {
      decorationL = ASCII_ART.PENISES[0];
      decorationR = ASCII_ART.PENISES[1];
    }
    const outputStr = str.replaceAll(
      word,
      `${decorationL}${word}${decorationR}`
    );

    try {
      fs.writeFileSync(path, outputStr);
    } catch (err) {
      console.log(err);
    }
  });

program
  .command("clean")
  .description("remove ascii")
  .argument("<path>", "path to file")
  .option("--cocks", "remove penises")
  .option("--tits", "remove tits")
  .action((path, options) => {
    const str = fs.readFileSync(path, "utf8");

    let toBeRemoved = [];
    let outputStr = str;

    if (options.cocks) {
      toBeRemoved.push(...ASCII_ART.PENISES);
    } else if (options.tits) {
      toBeRemoved.push(...ASCII_ART.TITS);
    } else {
      toBeRemoved.push(...ASCII_ART.PENISES, ...ASCII_ART.TITS);
    }

    for (const ascii of toBeRemoved) {
      outputStr = outputStr.replaceAll(ascii, "");
    }

    try {
      fs.writeFileSync(path, outputStr);
    } catch (err) {
      console.log(err);
    }
  });

program.parse();
