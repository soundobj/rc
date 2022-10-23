This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Test task



## TODOs

Could not get the spotify types to work in my ts-config
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/spotify-api/index.d.ts

- Cache spotify token for an hour so we do not need to requests it redundantly

- try / catch spotify API calls

- make the search bar look more pretty, perhaps using a component library 

- make mobile aligment of cards better. at the moment is not centered correctly.

- load more functionality using API pagination.

- removing previous search and pressing enter with no value bar does clear previous search it would be nice to go back to the suggestions view

