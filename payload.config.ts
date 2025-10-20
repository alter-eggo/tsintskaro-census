import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "- Цинцкаро CMS",
      favicon: "/favicon.ico",
    },
  },
  collections: [
    // Will add collections in next steps
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  localization: {
    locales: ["ru", "el"],
    defaultLocale: "ru",
    fallback: true,
  },
});
