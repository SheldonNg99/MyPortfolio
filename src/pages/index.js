import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 '>
          <div className="flex items-center justify-between w-full lg:flex-col"> 
            <div className='w-1/2 md:w-full md:items-center'>
              <Image src={profilePic} alt="CodeBucks" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
              priority
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:text=6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-small sm:text-xs'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications and windows
              applications. This is my portfolio showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume_EnglishVer.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                >Resume_Eng
                <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="/Resume_JapaneseVer.pdf" target={"_blank"}
                className="flex ml-5 items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >Resume_Jp
                <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>


        </Layout>
      </main>
    </>
  )
}
