"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { urlFor } from "@/sanity/image";


// to fix hydration error
import { useEffect } from "react"
function InstagramEmbed({ postId }: { postId: string }) {
    useEffect(() => {
        // Only run on the client
        if (typeof window !== "undefined") {
            // Check if the script is already present
            if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
                const script = document.createElement("script")
                script.src = "//www.instagram.com/embed.js"
                script.async = true
                document.body.appendChild(script)

            }
            // If script is already loaded, reparse embeds
            // theres an error that shows "Uncaught ReferenceError: instgrm is not defined"
            // this should be fine for now.... []
            else if (window.instgrm !== "undefined") {
                // If script is already loaded, reparse embeds
                window.instgrm.Embeds.process()
            }
        }
    }, [])

    return (
        <iframe
            src={`https://www.instagram.com/p/${postId}/embed/`}
            className="overflow-hidden border-none rounded-lg"
            style={{
                maxWidth: "100%",
                minHeight: 480,
                overflow: "hidden",
                scrollbarWidth: "none",
            }}
            allowtransparency="true"

        ></iframe>
    )
}


// [] Need to get types and props properly!
export default function Hero(props: any) {

    // const { title, subtitle, description, backgroundImage, igPostID, ...rest } = props;

    // console.log(props)

    // console.log(title, subtitle, description, backgroundImage, igPostID)
    // console.log(`Uncaught Rest: ${JSON.stringify(rest)}`)

    console.log("Hero props:", props);
    switch (props.variation) {
        case "main":
            return (
                <section className="relative py-20 px-4 min-h-[80vh] flex items-center pt-40 sm:pt-32 justify-center">
                    <div className="absolute inset-0 z-0 opacity-25">
                        <Image
                            src={urlFor(props.backgroundImage).url() || "/default-hero-image.jpg"} // Fallback image
                            alt="AASIA Banner"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-foreground/90 "></div>
                    </div>
                    <div className="relative px-4  inset-0 z-10">
                        <div className="container mx-auto max-w-6xl z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                            {props.title}
                                        </h1>
                                        <p className="text-xl md:text-2xl text-gray-900 font-medium">{props.description}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {props.buttons?.map((button: any, index: number) => (

                                            <Button
                                                key={index}
                                                asChild
                                                size="lg"
                                                variant={button.variant}
                                                className="px-8 py-4  "
                                            >
                                                <a href={button.link}>{button.text}</a>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Content - Placeholder for Graphics */}
                                <div className="flex items-center justify-center h-[570px]">
                                    <InstagramEmbed postId="DJ13SqlxIi3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        default:
        case "secondary":
            return (
                <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 pt-40 px-4">
                    <div className="container mx-auto max-w-6xl text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{props.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            {props.description}
                        </p>
                    </div>
                </section>
            )
    }


}