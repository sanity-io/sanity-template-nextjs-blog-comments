import createImageUrlBuilder from '@sanity/image-url'
import { createClient, createPreviewSubscriptionHook } from 'next-sanity'

const config = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // When in production the Sanity API is only queried on build-time, and on-demand when responding to webhooks.
  // Thus the data need to be fresh and API response time is less important.
  // When in development/working locally, it's more important to keep costs down as hot reloading can incurr a lot of API calls
  // And every page load calls getStaticProps.
  // To get the lowest latency, lowest cost, and latest data, use the Instant Preview mode
  apiVersion: '2022-03-13',
  // see https://www.sanity.io/docs/api-versioning for how versioning works
}

export const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client
