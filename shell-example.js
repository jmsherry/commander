#!/usr/bin/env node
import shell from 'shelljs';

const staff = ['James', 'Robert', 'Katie', 'Russell', 'Toby', 'Jon', 'Mitch', 'Joe']


shell.mkdir('-p', 'staff');
shell.cd('staff');

for (const person of staff) {
  shell.mkdir('-p', person);
  shell.cd(person);
  shell.touch(`${person}.txt`)
  shell.echo(`${person}'s Report`).to(`${person}.txt`)
  shell.cd('../');
}