import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <section className="relative py-20 px-4 min-h-[80vh] flex items-center pt-40 sm:pt-32 justify-center">
            <div className="absolute inset-0 z-0 opacity-25">
                <Image
                    src="/aasia_banner_logo_official.png"
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
                                    Asian American Students In Alliance
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-900 font-medium">Pan-Asian Student Organization at UIC</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
                                >
                                    <a href="#membership">Membership Form</a>
                                </Button>
                                {/* <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium bg-transparent"
                          >
                            <a href="#forms">Other Important Form</a>
                          </Button> */}
                            </div>
                        </div>

                        {/* Right Content - Placeholder for Graphics */}
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white/50 backdrop-blur-sm">
                                <div className="text-center p-8">
                                    <div className="text-gray-500 text-lg font-medium mb-2">Place Holder for</div>
                                    <div className="text-gray-700 text-xl font-semibold">Insta Graphics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}