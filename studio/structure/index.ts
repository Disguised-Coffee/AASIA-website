import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('AASIA Website')
    .items([
      S.documentTypeListItem("homePage").title("Home Page"),
      S.documentTypeListItem("eBoardPage").title("E-Board Page"),
      S.documentTypeListItem("evoPage").title("EVO Page"),
      S.documentTypeListItem("faqPage").title("FAQ Page"),
      S.documentTypeListItem("page").title("Other Pages"),
      S.divider(),
      S.documentTypeListItem("gallery").title("Gallery"),
      S.divider(),
      S.documentTypeListItem("siteSettings").title("Site Settings"),
    ])
