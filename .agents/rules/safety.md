---
description: Safety rules to prevent destructive actions
---

# Safety Rules

## Terminal
- **NEVER** run `rm -rf` or any recursive delete without explicit user approval.
- **NEVER** run `sudo` commands.
- **NEVER** run `curl | sh` or `wget | sh` (piped remote scripts).
- **NEVER** modify system files outside the project directory.
- Always confirm before running `git push --force` or `git reset --hard`.

## Files
- **NEVER** overwrite `package.json` entirely — use specific edits.
- **NEVER** delete `.env.local` or any environment files.
- Always create a backup mention before modifying critical config files.

## Secrets
- **NEVER** log, display, or commit API keys, tokens, or passwords.
- **NEVER** hardcode credentials in source files.
- Always use environment variables for sensitive data.

## Git
- Always commit with meaningful messages in French (format: `type(scope): description`).
- Never commit `node_modules/`, `.env.local`, or `dist/`.
