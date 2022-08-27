# Next.js blog with comment section

This is a demo of how to add a simple comment section to blog post using [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io), and [Vercel](https://vercel.com).

### Running the front-end

You'll need to create a `.env.local` file to store a few environment variables that Next will use to pull data from the Sanity API.

```js
SANITY_API_TOKEN = 'API-TOKEN-FROM MANAGE.SANITY.IO'
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

The Studio will be running at `http://localhost:3333` locally, and a `/studio` subpath once deployed to Vercel.

# Instructions for maintainers

This template is linked to a live deploy, with a [dashboard](https://vercel.com/sanity-io/sanity-template-nextjs-blog-comments).
If you don't have access to login to the Studio ping us on #ecosystem and we'll get you sorted. 😌 The same goes for access to the Vercel dashboard.

## PR workflow by default

PRs show you `npm install` and build output, and provide you with live preview deploy links of the template.

## Local workflow when you need it

Get up and running with the same dataset as PR previews in no time, open your terminal after you `git checkout` and:

1. `npx vercel link`
   ```bash
   Vercel CLI 27.4.0
   ? Set up “~/Developer/GitHub/sanity-template-nextjs-blog-comments/template”? [Y/n] y
   ? Which scope should contain your project? Sanity
   ? Found project “sanity-io/sanity-template-nextjs-blog-comments”. Link to it? [Y/n]
   ✅  Linked to sanity-io/sanity-template-nextjs-blog-comments (created .vercel)
   ```
2. `npx vercel env pull`
3. Run `next` on [http://localhost:3000] using `npm run dev`, and `studio` on [http://localhost:3333] using `npm run start:sanity`
