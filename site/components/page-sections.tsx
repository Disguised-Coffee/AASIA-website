// site/components/page-sections.tsx
import Hero from './blocks/hero'
import { SplitFeature } from './blocks/splitFeature';
import {FeatureSection} from './blocks/feature';
import { Gallery } from './blocks/gallery';
import { VideoBlock } from './blocks/video';
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
          case 'gallerySection':
            return <Gallery key={i} {...section} />
          case 'splitImage':
            return <SplitFeature key={i} {...section} />  
          case 'feature':
            return <FeatureSection key={i} {...section} />

          case 'videoSection':
            return <VideoBlock key={i} {...section} />
          default:
            return null
        }
      })}
    </>
  )
}