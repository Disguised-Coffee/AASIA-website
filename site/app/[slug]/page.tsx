// site/app/page.tsx (or [slug]/page.tsx)
import { PageBuilder } from '@/components/page-sections';
import { client } from '@/sanity/client'

const query = `
  *[_type == "page" && slug.current == $slug][0]{
    title,
    sections[]{
      ...
    }
  }
`

// const query2 = `
//   *[_type == "page" && slug.current == $slug][0]{
//     title,
//     sections[]{
//       _type,
//       _key,
//       title,
//       description,
//       backgroundImage,
//       igPostID,
//       buttons[]{
//         _key,
//         text,
//         link
//       }
//     }
//   }
// `

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const data = await client.fetch(query, { slug: (await params).slug })
    // ...
    if (!data) {
        return <div>Page not found</div>
    }

    // console.log(data.sections)
    return (
        <div>
            <h1>{data.title}</h1>
            <PageBuilder sections={data.sections} />
        </div>
    )
}