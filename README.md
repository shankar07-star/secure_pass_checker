# SecurePass — Password Security Analyzer

Privacy-first password strength analysis. **Your password never leaves your device.**

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm test        # node --test security & contract tests
```

## Architecture

- `app/` — `/` analyzer, `/generator`, `/about`, `/security`
- `components/` — modular UI (input, meter, crack times, analysis, generators, …)
- `lib/password-analysis.ts` — zxcvbn-ts wrapper → 0–100 score, 4 attack scenarios, findings, suggestions (all client-side)
- `lib/generator.ts` — Web Crypto (`crypto.getRandomValues`) password + passphrase generation
- `lib/wordlist.ts` — 500+ word passphrase list

## Privacy guarantees

- No backend receives passwords. No DB, no logs, no analytics with input.
- No `localStorage` / `sessionStorage` / URL persistence of passwords.
- No `Math.random()` for secrets. No `dangerouslySetInnerHTML` on user input.

## Estimates, not promises

Crack times are theoretical estimates per attack model (rate-limited online, non-rate-limited online,
slow-hash offline, fast-hash offline). They vary with hardware, hashing, and attacker knowledge.
