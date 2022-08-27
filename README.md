# Next.js blog with comment section [![Prettier](https://github.com/sanity-io/sanity-template-nextjs-blog-comments/actions/workflows/prettier.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-blog-comments/actions/workflows/prettier.yml) [![CI](https://github.com/sanity-io/sanity-template-nextjs-blog-comments/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-blog-comments/actions/workflows/ci.yml) ![Vercel](https://vercelbadge.vercel.app/api/sanity-io/sanity-template-nextjs-blog-comments)

### [Live demo](https://template-nextjs-blog-comments.sanity.build/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-blog-comments&project-name=sanity-next-blog-comments&repository-name=sanity-next-blog-comments&demo-title=Next.js%20Blog%20with%20Comments&demo-description=A%20Next.js%20%2B%20Sanity%20blog%20with%20comments%20stored%20in%20Studio%20via%20API%20routes.&demo-url=https%3A%2F%2Ftemplate-nextjs-blog-comments.sanity.build%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fsanity-io%2Fsanity-template-nextjs-blog-comments%2Fmain%2F.sanity-template%2Fassets%2Fpreview-image.jpg&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

![screenshot](https://user-images.githubusercontent.com/81981/187021365-005d3f77-d145-4b29-9ea6-4da62414a810.png)

This is a demo of how to add a simple comment section to blog post using [Next.js](https://nextjs.org), [Sanity.io](https://www.sanity.io), and [Vercel](https://vercel.com).

### Running the front-end

You'll need to create a `.env` file to store a few environment variables that Next will use to pull data from the Sanity API.

```dotenv
SANITY_API_TOKEN=<API-TOKEN-FROM MANAGE.SANITY.IO>
NEXT_PUBLIC_SANITY_PROJECT_ID=<YOUR-PROJECT-ID>
NEXT_PUBLIC_SANITY_DATASET=<YOUR-DATASET-NAME>
SANITY_STUDIO_API_PROJECT_ID=<YOUR-PROJECT-ID>
SANITY_STUDIO_API_DATASET=<YOUR-DATASET-NAME>
```

For instance, your file should look like this:

```dotenv
SANITY_API_TOKEN=averylongstringofcharacters
NEXT_PUBLIC_SANITY_PROJECT_ID=abcdefgh
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_API_PROJECT_ID=abcdefgh
SANITY_STUDIO_API_DATASET=production
```

To find these, visit https://manage.sanity.io

The Project ID is displayed once you select your project. It is an alphanumeric 8-character string.

You can find or create your Sanity API token by choosing "Settings" and then "API". It is a 180-character string.

The dataset is the name of the dataset that you want to use. For instance "production".

Once those env variables are in place, you can run the following commands to get Next's development server up and running:

```bash
npm install

# Run the frontend
npm run dev

# Run the Studio
npm run start:sanity
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.
