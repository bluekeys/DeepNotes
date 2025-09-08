# TODOs for DeepNotes Repository

A starter list of tasks to help bring the project back to life and polish the codebase. Update this file as you progress!

## Project Setup & Environment
- [ ] Ensure `.env` is present and correctly configured for all services
- [ ] Validate Docker Compose setup: all services start and communicate as expected
- [ ] Confirm KeyDB and PostgreSQL are running and accessible
- [ ] Check for database migration scripts or initial data setup

## Codebase Review & Quality
- [ ] Run `pnpm install` and resolve any dependency issues
- [ ] Review and update custom patches in `patches/` for necessity and compatibility
- [ ] Run linting and formatting tools to catch style/code issues
- [ ] Check for outdated or vulnerable dependencies in all `package.json` files

## Build & Run Scripts
- [ ] Test `pnpm run repo:build` and ensure all build steps succeed
- [ ] Start backend servers with `pnpm run dev` and verify functionality
- [ ] Start frontend (SPA/SSR/Electron/Android/iOS) and confirm builds work
- [ ] Review and document frontend build process for Quasar, Capacitor, Electron

## Documentation & Troubleshooting
- [ ] Review and update `README.md` for setup instructions, architecture overview, and troubleshooting tips
- [ ] Add documentation for inter-service communication (e.g., WebSocket, REST, RPC)
- [ ] Add FAQ or troubleshooting section for common issues

## Testing
- [ ] Run tests using `vitest` and review coverage
- [ ] Add or fix tests as needed for critical features

## Service Architecture
- [ ] Document the role and interaction of each service (app-server, collab-server, realtime-server, scheduler, manager)
- [ ] Clarify which services are needed for local development vs. production/staging

## Frontend Polish
- [ ] Ensure Quasar, Capacitor, and Electron builds work out of the box
- [ ] Verify platform-specific dependencies for mobile/desktop builds

## General Improvements
- [ ] Add more inline `TODO:` comments in code for specific refactoring or fixes
- [ ] Organize and clean up unused files or legacy code

---

_Keep this list updated as you discover new tasks or complete existing ones!_
