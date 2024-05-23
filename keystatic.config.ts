import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "zonka-team/kubameble",
  },
  ui: {
    brand: {
      name: "KUBA MEBLE",
    },
  },
  collections: {
    realizations: collection({
      label: "Realizations",
      slugField: "title",
      path: "src/content/realizations/*",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        mainImage: fields.image({
          label: "Main image",
          directory: "public/images/realizations",
          publicPath: "/images/realizations",
        }),
        images: fields.array(
          fields.image({
            label: "Images",
            directory: "public/images/realizations",
            publicPath: "/images/realizations",
          })
        ),
        date: fields.date({ label: "Date", defaultValue: "today" }),
      },
    }),
    banners: {
      label: "Banners",
      slugField: "title",
      path: "src/content/banners/*",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        bannerImage: fields.image({
          label: "Banners",
          directory: "public/images/banners",
          publicPath: "/images/banners",
        }),
        description: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    },
  },
});
