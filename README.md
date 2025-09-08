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

## Development

> **Note:** Commit message hooks (used to enforce commit message style) are not installed until you run `pnpm install`. This step sets up [Husky](https://typicode.github.io/husky/) to automatically check your commit messages using commitlint. If you make commits before running `pnpm install`, the commit hooks will not be active and your messages may not be checked.

```console
git clone https://github.com/bluekeys/DeepNotes && cd DeepNotes && cp template.env .env && pnpm install && pnpm run repo:build && docker-compose up -d
```

(On Windows, use WSL or Git Bash to run the commands above)

1. Run `pnpm run dev` to start the backend servers.
2. Run one of these commands to start the frontend server:
   - `pnpm run dev:spa` to start the Single Page Application app.
   - `pnpm run dev:ssr` to start the Server Side Rendered app.
   - `pnpm run dev:electron` to start the Electron app.
   - `pnpm run dev:android` to start the Android app (requires Android Studio).
   - `pnpm run dev:ios` to start the iOS app (requires Xcode).

(If you use SPA or SSR, you must access the app through `http://localhost:60379` by default. Other URLs won't work. You can configure the host and ports in the `.env` file.)

## Special thanks to these libraries for making DeepNotes possible:

- [Vue.js](https://vuejs.org/): Reactivity, component system, and more
- [Quasar Framework](https://quasar.dev/): Cross-platform frontend framework
- [Yjs](https://docs.yjs.dev/): Realtime collaboration
- [Tiptap](https://tiptap.dev/): Rich text editor
- [KeyDB](https://docs.keydb.dev/) and [Redis](https://redis.io/): Scalable shared memory and communication
- And many more...

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

## Credits

This project is a fork of [DeepNotesApp/DeepNotes](https://github.com/DeepNotesApp/DeepNotes) by DeepNotesApp. Special thanks to the original author and contributors for their work.
