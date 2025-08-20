"use client"

import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/image";


function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { PortableText } from "next-sanity";

// it's actually better if we typegen this later instead.
interface ContentSectionProps {
    label?: string
    title: string
    description: string
    buttonText?: string
    buttonHref?: string
    imageSrc: string
    imageAlt: string
    imageOnRight?: boolean
    backgroundColor?: string
    children?: ReactNode
}

export function SplitFeature(props: any) {

    let isMobile = useIsMobile();

    // console.log("SplitFeature text:", props.text);
    console.log("SplitFeature:", props);

    const textContent = (
        <div className="flex flex-col justify-center space-y-6">
            {props.label && <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{props.label}</div>}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{props.title}</h2>
            <div className="text-lg text-gray-600 leading-relaxed">
                {/* Render PortableText for rich text content */}
                <PortableText value={props.text} />
            </div>
            {props.buttons && (
                <div>
                    {props.buttons.map((button: any, index: number) => (
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
            )}
        </div>
    )

    const imageContent = (
        <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
                <Image
                    src={!isMobile ? (urlFor(props.image).url() || "/aasia_circle_logo.png") : (urlFor(props.image).url() || "/aasia_banner_logo_official.png")} // Fallback image
                    alt={props.image?.alt || "Hero Background"}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )

    return (
        <section className={`py-16 px-4`}>
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {props.orientation ? (
                        <>
                            {textContent}
                            {imageContent}
                        </>
                    ) : (
                        <>
                            {imageContent}
                            {textContent}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
