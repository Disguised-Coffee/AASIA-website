import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Definitely not a blog')
    .items([
      S.documentTypeListItem("gallery").title("Gallery"),
      S.documentTypeListItem("page").title("Pages"),
      S.divider(),
      S.documentTypeListItem("category").title("Categories"),
      
      
    ])
