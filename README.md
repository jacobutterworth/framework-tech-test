This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, OR go to [https://jacobbutterworth.com](jacobbutterworth.com) to see the most recent push to main deployed.

## Notes from the Technical Assessment

- Dev handover document is super handy! I tried to get all of the styles in properly.
- It was cool not reaching for [shadcn/ui](https://ui.shadcn.com) for the components and building them in tailwind.
- Just realised that I shouldn't have re-used the NavBar component in the footer - it could probably have been it's own component instead of me frankenstein-ing it at the bottom of the page.tsx.
- Aahhhh just seen the mobile footer too - you can tell what I left for last.
- I'd like to have added some tests in too but wanted to get this submitted with time to look at it before the end of today!
