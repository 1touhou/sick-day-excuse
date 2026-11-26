# Sick-Day Excuse

One line that gets you out of work and gets a laugh — an entry for
[The Funniest Sick-Day Excuse](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
on make.fun.

[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/1touhou/sick-day-excuse/rank.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/1touhou/sick-day-excuse/reward.svg)](https://make.fun/c/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

## How it works

`main.ts` (Node 22, standard library only) writes a single sick-day excuse —
one line, under 200 characters — to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It refuses to write anything
outside the 1–200 character gate, and it is deterministic: every run writes
the exact same line.

## Run it

```sh
node main.ts
```
