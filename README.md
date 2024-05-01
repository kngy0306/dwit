# Dwit

## Description

~~

## Installation

```bash
pnpm install
pnpm dev
```

Access

- Vite+React: http://localhost:5173/
- Express: http://localhost:5001/status/ （and return `{ "ok": true }` message）

## Set up Database

By default, PostgreSQL is started with Docker.

Copy and set values in `.env` file.

```bash
cp .env.sample .env
```

Create a symbolic link to the root `.env` file in the *database* folder.

```bash
cd packages/database/
ln -s ../../.env .env
```

In root directory, start docker.

```bash
# pwd => ~/dwit
docker compose up
```

Execute migrate and seed.

```bash
pnpm --filter=database run db:migrate:dev
pnpm --filter=database run db:seed

# Seed data check.
pnpm --filter=database run studio
# See http://localhost:5555
```

<img width="982" alt="screenshot of prisma studio" src="https://github.com/kngy0306/dwit/assets/57553474/1b86fc38-4790-456f-b5da-aef3fe577885">

Done. 🎉

## Appendix

This repository uses [https://github.com/vercel/turbo/tree/main/examples/kitchen-sink](https://github.com/vercel/turbo/tree/main/examples/kitchen-sink).
