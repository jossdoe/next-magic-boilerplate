# Next.js App Template

This repo is based on the official [Magic example repo](https://github.com/vercel/next.js/tree/canary/examples/with-magic) by Vercel/Next.js.

Additions in this template:

- MongoDB set-up with mongoose
- Styled Components
- Optimized Context-pattern included
- Absolute imports/aliases (see jsconfig.json)
- Changes to file/folder structure

## Getting started

- Use the template function on GitHub and clone your repo
- Run `npm i`
- Create a file at the root and name it `.env.local`
- Populate it with these variables:

```
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=
MAGIC_SECRET_KEY=
TOKEN_SECRET=
MONGODB_URI=
```

- Get `NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY` and `MAGIC_SECRET_KEY` from your dashboard at [Magic](https://magic.link/)
- `TOKEN_SECRET` needs to be some arbitrary value with at least 32 characters
- `MONGODB_URI` is the connection to your database
- `npm run dev` 🚀
