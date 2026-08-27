# Security Policy

## Reporting a Vulnerability

**Please do not open a public issue for security problems.**

Report it privately through [GitHub's private vulnerability reporting](https://github.com/primefaces/primevue/security/advisories/new), or email **contact@primetek.com.tr** if you'd rather not use GitHub.

Include whatever you have: the affected version, a short proof of concept, and what an attacker could actually do with it. A working reproduction helps us confirm the issue quickly.

We aim to acknowledge reports within a few business days. Once we've confirmed an issue, we'll tell you what the fix timeline looks like and keep you updated until it ships.

Once a fix ships we publish a GitHub Security Advisory and credit you by name, unless you'd prefer we didn't.

Please give us a chance to release a fix before going public. If you haven't heard back in a couple of weeks, email again. Something went wrong on our end.

## Supported Versions

| Version          | Status                |
| ---------------- | --------------------- |
| 4.x              | Security fixes only   |
| Earlier releases | End of life, no fixes |

This repository is where security maintenance for the MIT-licensed PrimeVue releases happens. It does not accept feature requests, new functionality, or general bug reports. See the [README](./README.md) for where active development continues.

If you're on an older major, upgrade to the latest 4.x release. We won't be backporting fixes.

## Scope

In scope:

- Anything that lets an attacker run code, escalate privileges, or corrupt application state through a PrimeVue component or utility
- XSS reachable through documented component APIs
- Prototype pollution and similar object integrity issues in the utility APIs

Out of scope:

- Issues in the documentation site or demo applications
- Dependency CVEs with no reachable code path in PrimeVue. Report those upstream
- Missing security headers or configuration on our websites

If you're unsure, report it anyway. We'd rather triage something out of scope than miss a real issue.

## Past Advisories

Published advisories are listed under [Security Advisories](https://github.com/primefaces/primevue/security/advisories).
