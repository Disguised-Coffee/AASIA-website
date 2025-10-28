import { EnhancedImageCarousel } from "../enhanced-image-carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GalleryPreview } from "../gallery-preview";



export function Gallery(props: any) {

    console.log(props);
    console.log("Gallery props:", props);
    switch (props.variation) {
        case "grid":
            return (
                <GalleryPreview
                    title="EVO Gallery"
                    description="Explore memorable moments from our EVO showcases throughout the years"
                    images={props?.galleryRef?.images}
                    galleryLink="/gallery/evo-showcase-2024"
                />
            );
        case "slideshow":
            return (
                <section className="bg-gray-50 py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            {props.title}
                        </h2>
                        <EnhancedImageCarousel images={props?.galleryRef?.images} />
                    </div>
                    <div className="text-center py-6">
                        {/* <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                        <Images className="h-5 w-5" />
                        <span className="text-sm">Showing 6 of {images.length}+ photos</span>
                    </div> */}

                                    {/* <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Link href={"/gallery"} className="inline-flex items-center gap-2">
                                    View Gallery
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button> */}
                    </div>
                </section>

            );
        default:
            // Implement default layout later []
            break;
    }


}