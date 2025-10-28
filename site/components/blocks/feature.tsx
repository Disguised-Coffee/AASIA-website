"use client"

import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/image";
import Link from "next/link";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { PortableText } from "next-sanity";

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


export function FeatureSection(props: any) {

    // console.log("SplitFeature text:", props.text);
    console.log("Feature:", props);

    let Content = () => {

        switch (props.orientation) {
            case "left":
                return (
                    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-x-12">
                        boo
                    </div>
                );
                break;
            case "right":
                return (
                    <div className="absolute mx-auto max-w-6xl z-40 inset-x-0 bottom-10 lg:top-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20 px-6 lg:p-16">
                            {/* Image */}
                            {/* there's gotta be a better way to do this */}
                            <div className="flex items-center justify-center lg:order-1">

                            </div>

                            {/* Content */}
                            <div className="space-y-6 lg:order-2 px-2">
                                <div>
                                    {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                                    Cultural Showcase
                                    </div> */}
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                        EVO: Evolution
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Are you interested in dancing? Do you want to learn about new dance styles from all over Asia? Are you a beginner or advanced performer? Feel free to join Evolution (or EVO)! We are a no-audition dance group dedicated to spreading Asian culture all over UIC!
                                    </p>
                                </div>
                                <div className="justify-center flex">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                                        <Link href="/evo">Discover EVO</Link>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            case "bottom":
                return(
                    <div className="mx-auto max-w-6xl z-10 absolute inset-x-0 bottom-0 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="p-6">
                                    {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Leadership</div> */}
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                        {props.title}
                                    </h2>
                                    <div className="text-lg text-gray-700 leading-relaxed">
                                        <PortableText value={props.description} />
                                    </div>
                                </div>


                            </div>
                            {/* KA MIGHT SAY SOMETHING ABT THIS [] */}
                            <div className="flex flex-col sm:flex-row gap-4 p-6 justify-center">
                                {props.buttons && props.buttons.map((button: any, index: number) => (
                                    <Button
                                        key={index}
                                        asChild
                                        size="lg"
                                        variant={button.variant}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                                    >
                                        <Link href={button.link || ""}>{button.text}</Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
                break;
        }
    }

    return (
        <section className="relative bg-gray-50 py-16 px-4 overflow-hidden min-h-[80vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={props.backgroundImage ? urlFor(props.backgroundImage).url() : "aasia_banner_logo_official.png"}
                    alt="E-Board background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-25 grayscale"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div> */}
            </div>
            <Content />
        </section>
    )

    switch (props.orientation) {
        case "left":
            // Render layout for left orientation
            break;
        case "right":
            return (
                <section className="relative bg-gray-50 py-16 px-4 overflow-hidden min-h-[80vh]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-10">
                        <Image
                            src="aasia_banner_logo_official.png"
                            alt="E-Board background"
                            fill
                            style={{ objectFit: "cover" }}
                            className="opacity-25 grayscale"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div> */}
                    </div>
                    <div className="absolute mx-auto max-w-6xl z-40 inset-x-0 bottom-10 lg:top-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20 px-6 lg:p-16">
                            {/* Image */}
                            {/* there's gotta be a better way to do this */}
                            <div className="flex items-center justify-center lg:order-1">

                            </div>

                            {/* Content */}
                            <div className="space-y-6 lg:order-2 px-2">
                                <div>
                                    {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                                    Cultural Showcase
                                    </div> */}
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                        EVO: Evolution
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Are you interested in dancing? Do you want to learn about new dance styles from all over Asia? Are you a beginner or advanced performer? Feel free to join Evolution (or EVO)! We are a no-audition dance group dedicated to spreading Asian culture all over UIC!
                                    </p>
                                </div>
                                <div className="justify-center flex">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                                        <Link href="/evo">Discover EVO</Link>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )
        case "bottom":
            return (
                <section className="relative bg-gray-50 py-16 px-4 overflow-hidden min-h-[80vh]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={urlFor(props.backgroundImage).url() || "/aasia_banner_logo_official.png"}
                            alt={props.backgroundImage?.alt || "E-Board background"}
                            fill
                            style={{ objectFit: "cover" }}
                            className="opacity-25 grayscale"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div> */}
                    </div>

                    <div className="mx-auto max-w-6xl z-10 absolute inset-x-0 bottom-0 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="p-6">
                                    {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Leadership</div> */}
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                        {props.title}
                                    </h2>
                                    <div className="text-lg text-gray-700 leading-relaxed">
                                        <PortableText value={props.description} />
                                    </div>
                                </div>


                            </div>
                            {/* KA MIGHT SAY SOMETHING ABT THIS [] */}
                            <div className="flex flex-col sm:flex-row gap-4 p-6 justify-end">
                                {props.buttons && props.buttons.map((button: any, index: number) => (
                                    <Button
                                        key={index}
                                        asChild
                                        size="lg"
                                        variant={button.variant}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                                    >
                                        <Link href={button.link}>{button.text}</Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )
        default:
            return null;
    }
}
