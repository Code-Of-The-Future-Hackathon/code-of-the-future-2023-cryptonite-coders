// import { CourseParent } from '@/components/Courses/course-parent'
// import { ModeToggle } from '@/components/theme-toggle'
// import { OrgHeader } from '@/components/organizations-show.tsx/organisations-header'
// import Link from 'next/link'

import RevealAnimation from "@/components/animations/reveal-animation";
import CarouselBlock from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {/* <ModeToggle/>
      <CourseParent/>
      <OrgHeader/>
      <Link href="/organisations">Org</Link>
      <Link href="/register">Sign up</Link>
      <Link href="/login">Login</Link> 
            <div className="h-screen flex justify-center items-center w-full text-center">
                <Typography variant="h1">
                    Global Cultural Virtual Exchange
                </Typography>
            </div>
            <div className="h-screen flex justify-center items-center w-full">
                <CarouselBlock images={[""]} />
            </div>
            <div className="h-screen flex justify-center items-center w-full">
                <Button
                    variant="outline"
                    className="h-40 w-[50%] rounded-full text-5xl"
                >
                    Begin your journy
                </Button>
            </div>
            <div className="h-screen flex justify-center items-center w-full text-center">
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error enim, provident at, maxime ex in hic quisquam ipsum
                    rem dicta non quaerat labore inventore rerum iure, eos iusto
                    doloremque voluptatibus.
                </Typography>
            </div> */}
            <RevealAnimation direction="left">
                <div className="h-screen flex justify-center items-center flex-col gap-3">
                    <Typography variant={"h1"}>
                        Welcome to Global Cultural Virtual Exchange
                    </Typography>
                    <Link
                        href="login"
                        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-blue-500 transition duration-300 ease-out border-2 border-blue-500 rounded-lg shadow-md group w-1/3"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Begin your journy
                        </span>
                        <span className="relative invisible">Button Text</span>
                    </Link>
                </div>
            </RevealAnimation>
            <div
                className="bg-blue-300 pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto flex flex-col items-center relative lg:flex-row lg:py-32
        xl:py-48 md:px-8"
            >
                <div
                    className="flex justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
          lg:items-center"
                >
                    <img
                        src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="object-contain object-top w-full h-auto lg:w-auto lg:h-full rounded-2xl"
                    />
                </div>
                <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
                    <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                        <div className="mb-6 max-w-xl">
                            <div className="text-3xl font-bold tracking-tight text-gray-900 max-w-lg sm:text-4xl sm:leading-none mb-6">
                                <p className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                    Write anything and start
                                </p>
                                <p
                                    className="inline-block text-gray-900 text-3xl font-bold tracking-tight mr-2 sm:text-4xl
                  sm:leading-none"
                                >
                                    being
                                </p>
                                <p
                                    className="inline-block text-blue-700 text-3xl font-bold tracking-tight sm:text-4xl
                  sm:leading-none"
                                >
                                    creative
                                </p>
                            </div>
                            <p className="text-gray-700 text-base md:text-lg">
                                Step into a world where diversity dances with
                                unity, tradition intertwines with modernity, and
                                stories of the past shape the narrative of the
                                present. Our cultural website is not just a
                                virtual space; it's a gateway to a tapestry of
                                human experiences.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="md:mr-2 focus:border-blue-700
                focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none text-black
                bg-primary font-normal w-full h-12 text-xs rounded-md pt-3 pr-4 pb-3 pl-4 mb-2 border-2 shadow-sm
                border-gray-300"
                            />
                        </div>
                        <Link
                            href={"register"}
                            className="flex items-center mt-4 mr-0 mb-0 ml-0"
                        >
                            <p
                                className="transition duration-200 hover:bg-blue-900 focus:shadow-outline
                focus:outline-none bg-blue-700 text-primary inline-flex font-semibold tracking-wide h-12 rounded-md
                shadow-md items-center justify-center pr-6 pl-6 mr-6"
                            >
                                Sign up
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-primary mr-auto ml-auto py-16 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:px-0 lg:py-20">
                <div className="shadow-xl pt-8 pr-8 pb-8 pl-8 sm:p-16 rounded-md">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:mb-0 lg:w-1/2 lg:pr-5 mb-6">
                            <div>
                                <p className="block text-3xl font-bold tracking-tight text-secondary leading-6 font-sans sm:text-4xl">
                                    Connect with Communities
                                </p>
                                <p className="inline text-3xl font-bold tracking-tight text-secondary font-sans sm:text-4xl sm:leading-none">
                                    from all around
                                </p>
                                <p
                                    className="ml-1 inline text-blue-700 text-3xl font-bold tracking-tight font-sans sm:text-4xl
                  sm:leading-none"
                                >
                                    {" "}
                                    The World
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-left text-gray-700">
                                Engage in conversations with like-minded
                                enthusiasts, cultural ambassadors, and experts.
                                Our community forum is a space to share stories,
                                ask questions, and foster a sense of global
                                camaraderie. Because understanding each other is
                                the first step towards building a more
                                interconnected world.
                            </p>
                            <Link
                                href={"login"}
                                className="w-3/12 text-blue-700 text-center flex font-semibold items-center transition-colors duration-200
                hover:text-blue-900"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10 bg-secondary">
                    <CarouselBlock
                        images={[
                            "https://images.pexels.com/photos/318238/pexels-photo-318238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            "https://images.pexels.com/photos/1498273/pexels-photo-1498273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                         "https://images.pexels.com/photos/1211968/pexels-photo-1211968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                         "https://images.pexels.com/photos/994807/pexels-photo-994807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        "https://images.pexels.com/photos/3996466/pexels-photo-3996466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
                        ]}
                    />
                </div>

                <div className="w-full bg-secondary pt-20 pr-4 pb-20 pl-4 bg-gradient-to-b from-gray-100 to-primary">
                    <div className="w-full mt-0 mr-auto mb-0 ml-auto text-left md:text-center md:w-3/4 lg:w-2/4">
                        <p className="mb-2 text-base font-semibold text-blue-700">
                            Begin your journy now
                        </p>
                        <p className="text-secondary mt-0 mr-0 mb-6 ml-0 text-3xl font-extrabold">
                            Sign up for a free account to experience a new world
                            feedback
                        </p>
                        <div className="mt-- mr-- mb-0 ml-- space-x-0 md:space-x-2">
                            <Link
                                href="login"
                                className="bg-blue-700 text-white font-bold pt-2 pr-4 pb-2 pl-4 rounded inline-flex items-center
                justify-center w-full mb-2 hover:bg-blue-900 sm:w-auto sm:mb-0"
                            >
                                <p className="inline-flex">Get Started</p>
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
