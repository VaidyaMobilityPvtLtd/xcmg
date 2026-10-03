# Production verification

Build and restart the Node application after uploading the changes. Upload the
four new `public/hero/*.webp` files with the code. Keep the original SVG artwork;
`npm run optimize:heroes` renders complete compositions from those originals.

Run these checks before deployment:

```sh
npm ci
npm run lint
npm run build
npm run verify:site
```

The verification script starts a production server on port 3100 and checks the
main pages, catalog links, literal public asset references, image optimization,
malformed search queries and genuine 404 responses. It stops its server afterward.
These checks do not send contact emails or verify external services.

## Apache host

The live HTML endpoint was observed returning HTTP 200 behind Apache. The
reported intermittent client-navigation 404 could not be reproduced conclusively.
Catalog links now use normal HTML navigation, avoiding RSC prefetch and its
client cache. Other pages retain Next client navigation.

Check the reverse proxy configuration after deployment:

- Forward full query strings to Next, including catalog filters and `_rsc`.
- Forward Next router headers and preserve the origin's `Vary` response header.
- Do not cache HTML, RSC responses or 404s indiscriminately by pathname; query
  strings and router request headers can change the response.
- Route `/_next/image` to the running Next server, and serve `/_next/static`
  from the same build as the Node process. Deploy build files together and
  restart all application workers to avoid mixing builds.

Next's self-hosting guidance: https://nextjs.org/docs/app/guides/self-hosting

After deployment, test product cards, header menus, mobile menus, footer links,
filters and search without refreshing. Test on a mobile connection with a cold
cache. Confirm image requests return 200 and the large SVG banners are no longer
requested. Purge any previously cached error responses in the hosting layer.

## Image changes

Full-composition banners were reduced from 63,251,202 bytes to 1,088,098 bytes
before responsive optimization. The grid no longer preloads up to 48 original
images. Transparent product images use the optimizer, and hero image quality
uses the supported default of 75 instead of 95 or 100.

This is a measured asset-size reduction, not a measured live speed score. Live
latency and intermittent errors still require verification on the production host.
