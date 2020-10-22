# Sanity Asset Source Plugin: Unsplash
Seach photos on Unsplash and use them directly inside of your Sanity Studio.

[![Build Status](https://travis-ci.org/sanity-io/sanity-plugin-asset-source-unsplash.svg?branch=master)](https://travis-ci.org/sanity-io/sanity-plugin-asset-source-unsplash)

## Installation

`sanity install asset-source-unsplash`

## Part name

If you need to do cusotomize available asset sources, the plugin part name for this asset source is:

`part:sanity-plugin-asset-source-unsplash/image-asset-source`

## Developing on this module

To simulate using your development version as a real module inside a studio, you can do the following:

* Run `npm install && npm link` from the root of this repository.
* Run `npm run watch` to start developing and build the module when changes are made.

#### Displaying your development version inside a studio

**With the mono-repo's `test-studio`:**

  * Bootstrap the monorepo: `npm run bootstrap`
  * Add `sanity-plugin-asset-source-unsplash` with the current version number to `package.json` in the `test-studio` root folder (but don't run `npm install` afterwards)
  * Run `npm link sanity-plugin-asset-source-unsplash` inside the mono-repo's root.
  * Add `asset-source-unsplash` to the list of the studios plugins in `sanity.json`.
  * Restart the `test-studio`

**With a regular Sanity Studio:**
  * Run `npm install`
  * Add `sanity-plugin-asset-source-unsplash` with the current version number to `package.json`.
  * Run `npm link sanity-plugin-asset-source-unsplash`
  * Add `asset-source-unsplash` to the list of the studios plugins in `sanity.json`.
  * Start the studio

When you are done and have published your new version, you can run `npm unlink` inside this repo, and `npm unlink sanity-plugin-asset-source-unsplash` inside the mono-repo or studio to get back to the normal state. Then run `npm run bootstrap` for the mono-repo or `npm install` inside the regular studio to use the published version.


## Example Unsplash API Photo result

```json
{
  "id": "1_CMoFsPfso",
  "created_at": "2016-08-27T05:14:20-04:00",
  "updated_at": "2019-11-07T00:01:26-05:00",
  "promoted_at": "2016-08-27T05:14:20-04:00",
  "width": 6016,
  "height": 4016,
  "color": "#170801",
  "description": "Minimal pencils on yellow",
  "alt_description": "two gray pencils on yellow surface",
  "urls": {
    "raw": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMDg3MX0",
    "full": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMDg3MX0",
    "regular": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDg3MX0",
    "small": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwMDg3MX0",
    "thumb": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwMDg3MX0"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/1_CMoFsPfso",
    "html": "https://unsplash.com/photos/1_CMoFsPfso",
    "download": "https://unsplash.com/photos/1_CMoFsPfso/download",
    "download_location": "https://api.unsplash.com/photos/1_CMoFsPfso/download"
  },
  "categories": [],
  "likes": 4450,
  "liked_by_user": false,
  "current_user_collections": [],
  "user": {
    "id": "kA9qRJtrtA4",
    "updated_at": "2019-11-12T05:10:00-05:00",
    "username": "joannakosinska",
    "name": "Joanna Kosinska",
    "first_name": "Joanna",
    "last_name": "Kosinska",
    "twitter_username": "joannak.co.uk",
    "portfolio_url": null,
    "bio": null,
    "location": "Leeds",
    "links": {
      "self": "https://api.unsplash.com/users/joannakosinska",
      "html": "https://unsplash.com/@joannakosinska",
      "photos": "https://api.unsplash.com/users/joannakosinska/photos",
      "likes": "https://api.unsplash.com/users/joannakosinska/likes",
      "portfolio": "https://api.unsplash.com/users/joannakosinska/portfolio",
      "following": "https://api.unsplash.com/users/joannakosinska/following",
      "followers": "https://api.unsplash.com/users/joannakosinska/followers"
    },
    "profile_image": {
      "small": "https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
      "medium": "https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
      "large": "https://images.unsplash.com/profile-1477941848765-f577d5c83681?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    "instagram_username": "joannak.co.uk",
    "total_collections": 26,
    "total_likes": 534,
    "total_photos": 209,
    "accepted_tos": true
  }
}

```

## Example resulting asset document

```json
{
  "ms": 7,
  "query": "*[_type == \"sanity.imageAsset\" \u0026\u0026 _id == \"image-a6904e5887baafcf72f686cfa3e98399fd3ff74a-2600x1548-jpg\"]",
  "result": [
    {
      "_createdAt": "2019-11-14T09:01:47Z",
      "_id": "image-a6904e5887baafcf72f686cfa3e98399fd3ff74a-2600x1548-jpg",
      "_rev": "fDOLlTLScw9kMkHEI4HC9S",
      "_type": "sanity.imageAsset",
      "_updatedAt": "2019-11-14T09:01:47Z",
      "assetId": "a6904e5887baafcf72f686cfa3e98399fd3ff74a",
      "creditLine": "Qingbao Meng by Unsplash",
      "extension": "jpg",
      "metadata": {
        "_type": "sanity.imageMetadata",
        "dimensions": {
          "_type": "sanity.imageDimensions",
          "aspectRatio": 1.6795865633074936,
          "height": 1548,
          "width": 2600
        },
        "hasAlpha": false,
        "isOpaque": true,
        "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUHBv/EACMQAAIBAgYCAwAAAAAAAAAAAAECAwAEBQYREiExFDJBUWH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwX/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIREiFBUaH/2gAMAwEAAhEDEQA/AMbh2arnaqvdggfR1ppc52eOMi3V5SOyTwKjOFsxLNvbj9pniU81t4whlcCT2GvdZ8080RUK5KHNm6F33SBlfTkCiptcXkwk03dD5op2uvRbP//Z",
        "palette": {
          "_type": "sanity.imagePalette",
          "darkMuted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#435c39",
            "foreground": "#fff",
            "population": 6.83,
            "title": "#fff"
          },
          "darkVibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#698710",
            "foreground": "#fff",
            "population": 2.51,
            "title": "#fff"
          },
          "dominant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#728863",
            "foreground": "#fff",
            "population": 6.83,
            "title": "#fff"
          },
          "lightMuted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#bec6a9",
            "foreground": "#000",
            "population": 0.51,
            "title": "#fff"
          },
          "lightVibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#cad67e",
            "foreground": "#000",
            "population": 0.62,
            "title": "#000"
          },
          "muted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#728863",
            "foreground": "#fff",
            "population": 6.83,
            "title": "#fff"
          },
          "vibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#91b31a",
            "foreground": "#000",
            "population": 1.83,
            "title": "#fff"
          }
        }
      },
      "mimeType": "image/jpeg",
      "originalFilename": "2bb1b89b-726e-4d1c-a148-7936f57a432f.jpeg",
      "path": "images/q2r21cu7/example/a6904e5887baafcf72f686cfa3e98399fd3ff74a-2600x1548.jpg",
      "sha1hash": "a6904e5887baafcf72f686cfa3e98399fd3ff74a",
      "size": 1101084,
      "source": {
        "id": "01_igFr7hd4",
        "name": "unsplash",
        "url": "https://unsplash.com/photos/01_igFr7hd4"
      },
      "url": "https://cdn.sanity.io/images/q2r21cu7/example/a6904e5887baafcf72f686cfa3e98399fd3ff74a-2600x1548.jpg"
    }
  ]
}
```

## Futher reading

* https://unsplash.com/documentation
* https://www.sanity.io/docs/custom-asset-sources



