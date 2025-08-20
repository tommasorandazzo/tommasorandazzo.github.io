/**
 * @file
 * Types
 *
 * Define TS interfaces.
 */

interface Attachment {
  id: string,
}

interface Attribution {
  id: string,
  title: string,
  logo: string,
  name: string,
}

interface Category {
  id: string,
  title: string,
  bundle: string,
  name: string,
}

interface LinkExport {
  url: string,
  text: string,
}

interface Tags {
  id: string,
  title: string,
  bundle: string,
  name: string,
}

export interface Project {
  nid: string,
  title: string,
  path: string,
  body: string,
  body_summary: string,
  field_categories: Category[],
  field_tags: Tags[],
  field_link_export: LinkExport,
  field_media: string,
  media_thumbnail: string,
  field_attachments_export: Attachment[],
  field_attribution_export: Attribution[],
}
