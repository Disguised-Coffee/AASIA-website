import { Video } from "../VideoComp";
import { PortableText } from "next-sanity";

export function VideoBlock(props: any) {
    console.log(props);
    // bg color later []

    console.log(props.videoPlayer?.videoID);
    return (
    <section className={`py-16 px-4 ${"bg-gray-50"}`} id="video-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{props.title}</h2>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto">
            <PortableText value={props.description} />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Placeholder */}
          <Video title={props.videoPlayer?.title} description={props.videoPlayer?.caption} YTVideoID={props.videoPlayer?.videoID} />

          {/* Video Description */}
          <div className="mt-8 text-center">
            <div className="text-gray-600 max-w-2xl mx-auto">
              <PortableText value={props.videoPlayer?.caption} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}