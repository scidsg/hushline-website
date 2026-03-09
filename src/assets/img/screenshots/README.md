# Documentation Screenshots

This folder stores generated screenshot sets for docs.
Captures are generated from local app state using scripted scenes.
Each scene captures both light and dark mode by default.
Each scene captures above-the-fold, then viewport-by-viewport scroll windows, and full-page by default.
Full-page capture is skipped when unsupported.
Each release stores images by session under `releases/<version>/<session>/`.

## Latest run

- Release key: `v0.5.110`
- Base URL: `http://localhost:8080`
- Path: [releases/v0.5.110/README.md](./releases/v0.5.110/README.md)
- Latest alias: [releases/latest/README.md](./releases/latest/README.md)

## Required accounts

- admin (admin and org settings scenes)
- artvandelay (authenticated user settings scenes)
- newman (authenticated and onboarding-state settings scenes)
- first-user admin creation scene (captured via a separate manifest on a brand-new instance)

## Regenerate

```sh
make docs-screenshots RELEASE=v0.5.110
make docs-screenshots-first-user RELEASE=v0.5.110
```

