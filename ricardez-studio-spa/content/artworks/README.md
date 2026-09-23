# Artwork archive workspace

This is the editorial source workspace for consolidating the full artwork archive. All
records begin as `draft`; the live catalog continues using `src/data/artworks.ts` until
records have been reviewed and an image has been supplied.

## Folder convention

Each work is grouped by completion year:

```text
content/artworks/2025/insomnio/
  artwork.json
  IMG_4837.jpg
  IMG_4838.jpg
```

Works without a completion date stay under `in-progress/`. Image filenames do not need
to be cleaned up or renamed: place each file in the correct artwork folder using its
current name. Later, add that filename and its role (`artwork`, `detail`, `installation`,
or `documentation`) to the `images` array in `artwork.json`. Renaming a chosen primary
image to `main.jpg` is optional. Do not overwrite an original image merely to reduce
its size; optimization will be handled when these records are connected to the catalog.

The `review` array in each JSON file is a checklist, not public data. Remove flags only
after verifying the source information. Never infer ownership, availability, prices,
translations, or exhibition history.

## Add a future work

```text
npm run artwork:new -- 2026 nombre-de-la-obra
npm run artwork:new -- in-progress nombre-provisional
```

## Inventory import

The supplied tab-separated inventory is stored in `content/imports/artworks.tsv`. The
missing folders can be created with:

```text
npm run artwork:import -- content/imports/artworks.tsv
```

The importer preserves existing artwork JSON files, so running it again will not erase
manual edits. It normalizes dates and decimal commas, fixes common text-encoding
corruption, and creates review flags for missing information.
