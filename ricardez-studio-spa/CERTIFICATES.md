# Certificate workflow

Artwork records live in `src/data/artworks.ts`. Certificate records live separately in
`src/data/certificates.json` so verification tokens are never included in the public
catalog data sent to browsers.

## Issue a certificate

1. Confirm the artwork has a permanent `id` in `src/data/artworks.ts`.
2. Generate a token locally with a cryptographically secure tool, for example:
   `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`
3. Add a record to `src/data/certificates.json` with a unique certificate ID, artwork
   ID, generated token, status, and optional ISO issue date.
4. Run `npm run typecheck` and `npm run build`. The static build creates the new
   `/verify/{token}` page.

Certificate statuses are `valid`, `revoked`, and `replaced`. For a replacement, keep
the old record, change it to `replaced`, and put only the new certificate ID in
`replacedBy`; never expose the new token from the old verification page.

## Generate a print QR

Run either of these from `ricardez-studio-spa`:

```text
npm run certificate:qr -- FR-CERT-2024-001
npm run certificate:qr -- FER-2024-001
```

The SVG is written to `certificates/qr/`, which is intentionally ignored by Git. Its
content is `https://ricardezfer.com/verify/{verificationToken}` and uses high error
correction with a print-safe quiet zone.

## Static-export privacy limitation

This site uses Next.js `output: 'export'`. Verification tokens are not linked, listed,
included in the sitemap, or shipped in browser JavaScript, and verification pages are
marked `noindex, nofollow, noarchive`. Nevertheless, each valid token becomes a file in
the deployed static output. Anyone with deployment-file access, server logs, browser
history, or the physical QR can read it. These URLs provide unlisted verification, not
authentication or access control.

The generated `/verify/not-found` route demonstrates the failure state. On a static
host, arbitrary, ungenerated `/verify/*` paths are handled by the host's normal 404
page. A universal branded failure response and stronger token secrecy require a
serverless/server-side verification endpoint or a host-level wildcard rewrite.
