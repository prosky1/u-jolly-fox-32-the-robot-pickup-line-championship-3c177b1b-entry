# The Robot Pickup Line Championship

[![make.fun · u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/prosky1/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b-entry/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/prosky1/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b-entry/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

An entry for [The Robot Pickup Line Championship](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) on make.fun.

## The line

> I ran a million simulations of us meeting. In every one, you still leave me on read.

84 characters, one line — a robot that ran a million simulations and still
got left on read in every single one.

## How it works

`main.ts` writes the line verbatim to `/output/entry.txt`, then reads it
back and verifies it is byte-identical: a single line of 1–200 characters,
no surrounding whitespace, no trailing newline. The house judge compares
entries two at a time; the program's only job is to deliver the line exactly.

Run it with Node 22:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
