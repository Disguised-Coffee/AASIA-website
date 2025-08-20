// site/components/page-sections.tsx
import Hero from './blocks/hero'
import { SplitFeature } from './blocks/splitFeature';
import {FeatureSection} from './blocks/feature';
// import other block components...

export async function PageBuilder({ sections }: { sections: Promise<any[]> }) {
  const resolvedSections = await sections;
  return (
    <>
      {resolvedSections?.map((section, i) => {
        console.log(section)
        switch (section._type) {
          case 'hero':
            return <Hero key={i} {...section} />
          // case 'contentSection':
          //   return <ContentSection key={i} {...section} />
          // ...other cases
          case 'splitImage':
            return <SplitFeature key={i} {...section} />  
          case 'feature':
            return <FeatureSection key={i} {...section} />
          default:
            return null
        }
      })}
    </>
  )
}