import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/developer-pic-1.png"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            // console.log(latest)
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
        <Head>
            <title>About Me</title>
            <meta name="description" content="any Description"></meta>
        </Head>
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose! " className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"></AnimatedText>
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                    <p className="font-medium">
                    Greetings!!! I&apos;m Kai, a dedicated software engineer on a mission to craft captivating, efficient, and user-centric digital experiences. 
                    With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.
                    </p>
                    <p className="my-4 font-medium">
                    Over the past 24 months, my focus has revolved around the intricate world of Enterprise Resource Planning (ERP) systems , where I&apos;ve 
                    adeptly navigated through pivotal modules such as Finance, Sales, and Purchase, 
                    enabling me to orchestrate bespoke solutions that harmonize seamlessly with various industries.
                    </p>
                    <p className="font-medium">
                    Outside the realm of coding, my curiosity finds solace in language acquisition.
                    With fluency in an impressive array of five languages—Chinese, English, Bahasa Melayu, Japanese, and Cantonese
                    I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>

                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                xl:col-span-4 md:order-1 md:col-span-8
                ">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                    <Image src={profilePic} alt="Codebucks" className="w-full h-auto rounded-2xl" 
                    priority
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    />
                </div>

                <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                    
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={20}/>+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                        xs:text-sm">satisfied clients</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={50}/>+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                        xs:text-sm">projects completed</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={2}/>
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                        xs:text-sm">years of experience</h2>
                    </div>
                </div>

            </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default about
