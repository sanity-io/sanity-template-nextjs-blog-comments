# Next.js blog with comment section

This is a demo of how to add a simple comment section to blog post using [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io), and [Vercel](https://vercel.com).


### Running the front-end

You'll need to create a `.env.local` file to store a few environment variables that Next will use to pull data from the Sanity API.

```js
SANITY_API_TOKEN="API-TOKEN-FROM MANAGE.SANITY.IO"
```

Once those env variables are ready, you can run the following commands to get Next's development server up and running:

```bash
npm install

npm run dev
```

The blog will be running at `http://localhost:3000`

### Running Sanity Studio

To run the Sanity Studio locally, you'll need to run the following commands:

First install the Sanity CLI: `npm install -g @sanity/cli`.

```bash
# From the project root
cd studio

sanity start
```

The Studio will be running at `http://localhost:3333`