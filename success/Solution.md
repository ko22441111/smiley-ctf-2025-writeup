## Success - Smiley-CTF 2025 Write-up

**Challenge:** Success
**Category:** Reverse Engineering
**Points:** 50

### Introduction

For this challenge, "Success," we were given a Haskell source file `success.hs`. The goal seemed pretty clear: figure out the correct input string that the program would accept as the flag. Looking at the source code, I saw a huge chain of checks that the input had to pass. It became obvious pretty quickly that trying to solve this by hand would be next to impossible, which suggested that I'd need to script a solution, probably using a constraint solver.

**Full Solution : https://ctf-writeup-rfyv.vercel.app/2025/06/16/success-writeup.html**