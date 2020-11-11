import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "4l6fo4om", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: false,
  token: "sk5gM0vsiMJCKHFWdNa6SQxo2LD9ZYtetz0uiIOA2vBZ81KfBBsx5S3kpLSJ8zxsp3xO8DYlvk6wdGBVRZXoUivEVg2IdyIFUtYHGhmRZIOzYj8Sfh73yigVilxinkn7XjH5mWx5bOVpQxK0TGUPVv2vN9d2VNqdV3wrxfjQapMbaz7lCVFc",
});