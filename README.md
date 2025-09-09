# DeepNotes

Website: [https://deepnotes.app](https://deepnotes.app)

DeepNotes is an open source, end-to-end encrypted infinite canvas tool with deep page nesting and realtime collaboration.

## Why DeepNotes?

- **Infinite canvases:** Free yourself from the big wall of text.
- **Deep page nesting:** Explore concepts in all their complexity.
- **End-to-end encryption:** Keep your notes well protected.
- **Realtime collaboration:** Create groups to collaborate with your team.
- **Flexible note system:** Organize your notes in whatever way you want.
- **Lifelong storage:** Never lose your notes ever again.

## Core Technologies

DeepNotes is built using modern open source technologies:

- **[Vue.js](https://vuejs.org/):** Progressive JavaScript framework for building user interfaces and single-page applications.
- **[Quasar Framework](https://quasar.dev/):** Cross-platform frontend framework for building SPA, SSR, mobile, and desktop apps with Vue.
- **[Yjs](https://docs.yjs.dev/):** CRDT-based library for realtime collaboration and shared editing.
- **[Tiptap](https://tiptap.dev/):** Rich text editor framework built on top of ProseMirror, highly extensible for custom editors.
- **[Docker](https://www.docker.com/):** Containerization platform used to run databases and backend services in isolated environments.
- **[PostgreSQL](https://www.postgresql.org/):** Advanced open source relational database powering DeepNotes data storage.
- **[KeyDB](https://docs.keydb.dev/):** High-performance, multi-threaded database compatible with Redis, used for caching and pub/sub.
- **[Redis](https://redis.io/):** In-memory data structure store, used for caching and message brokering (via KeyDB compatibility).
- **[Turborepo](https://turbo.build/):** Monorepo build system for fast, incremental builds and caching across all packages and apps.
- **[pnpm](https://pnpm.io/):** Fast, disk-efficient package manager for JavaScript/TypeScript monorepos.
- **[Husky](https://typicode.github.io/husky/):** Git hooks manager used to enforce commit message style and automate checks.

#### About Turborepo

This project uses [Turborepo](https://turbo.build/) to manage and optimize builds across all packages in the monorepo. Turborepo enables fast, incremental builds and caching for large codebases with many interdependent packages.

- Build commands like `pnpm run repo:build` and development workflows are powered by Turborepo.
- Turborepo stores its local build cache in the `.turbo/` directory, which should not be committed to version control (see `.gitignore`).
- For more information, see the [Turborepo documentation](https://turbo.build/docs).

## Development

To set up and run DeepNotes locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/bluekeys/DeepNotes
cd DeepNotes
```

### 2. Prepare your configuration

Copy the example environment file to create your own local config:

```bash
cp template.env .env
```

Edit `.env` as needed for your local ports, database credentials, etc.

### 3. Install dependencies

Install all required packages for the monorepo:

```bash
pnpm install
```

This also sets up commit message hooks (via Husky) to enforce commit style.

### 4. Start the databases (Postgres & KeyDB)

Start the required database services using Docker:

```bash
docker-compose up -d
```

This launches Postgres and KeyDB containers. You need these running for backend services to work.

### 5. Start backend application servers

Run all backend services in parallel:

```bash
pnpm run dev
```

This starts the app-server, collab-server, realtime-server, etc. These connect to the databases you started above.

### 6. Start the frontend app

Choose one of the following commands depending on your target platform:

- **Single Page Application (SPA):**
  ```bash
  pnpm run dev:spa
  ```
- **Server Side Rendered (SSR) app:**
  ```bash
  pnpm run dev:ssr
  ```
- **Electron desktop app:**
  ```bash
  pnpm run dev:electron
  ```
- **Android app (requires Android Studio):**
  ```bash
  pnpm run dev:android
  ```
- **iOS app (requires Xcode):**
  ```bash
  pnpm run dev:ios
  ```

> For SPA or SSR, open [http://localhost:60379](http://localhost:60379) in your browser. You can change the host and ports in the `.env` file.

**Windows users:** Use WSL or Git Bash to run these commands.

## Contributing

### Commit Hooks and Husky

This project uses [Husky](https://typicode.github.io/husky/) to manage Git hooks. After running `pnpm install`, Husky sets up a commit-msg hook that checks your commit messages using commitlint. This helps enforce a consistent commit history and automates changelog generation.

If you commit before running `pnpm install`, the hooks will not be installed and your commit messages may not be checked.

### Commit Message Guidelines

This project uses [commitlint](https://github.com/conventional-changelog/commitlint) to enforce Conventional Commit messages. This helps keep the project history clean and automates changelog generation.

#### Format

Commit messages must follow this format:

```
type(scope): short description

[optional body, each line ≤ 100 characters]
```

**Types:**

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: formatting, missing semi colons, etc; no code change
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: performance improvement
- `test`: adding or correcting tests
- `chore`: changes to the build process or auxiliary tools

**Scope:** (optional) the part of the codebase affected, e.g. `client`, `server`, `docs`

#### Examples

- `feat: add new canvas drawing tool`
- `fix(client): resolve login bug`
- `chore: update dependencies`

#### More Resources

- [Commitlint documentation](https://commitlint.js.org/)
- [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/)

Commit messages that do not follow these rules will be rejected by the commit hook. If you need to add a longer description, use the commit body and keep each line under 100 characters.

## Licensing

DeepNotes is licensed under the **GNU Affero General Public License v3 (AGPL-3.0)**.

You are free to use, modify, and redistribute this software, provided that you also share your changes under the same license.
If you run a modified version of DeepNotes on a publicly accessible server, you must make the source code of your modifications available to users of that server.
The AGPL-3.0 ensures that improvements and changes remain open and accessible to the community, especially for network/server software.
For full license terms, see the [LICENSE](./LICENSE) file or visit [GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html).

If you contribute to DeepNotes, your contributions will also be covered by the AGPL-3.0 license.

## Credits

This project is a fork of [DeepNotesApp/DeepNotes](https://github.com/DeepNotesApp/DeepNotes) by DeepNotesApp. Special thanks to the original author and contributors for their work.
