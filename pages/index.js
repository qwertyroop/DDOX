import React, { useContext } from "react";
import LandingLayout from "../components/layouts/LandingLayout";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { StateContext } from "./_app";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { heroImage } from "./hero.png";
import {
  outerContainer,
  heroItem,
  slideUpContainer,
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
} from "../lib/framerMotion";

export default function Home() {
  const router = useRouter();
  const codeString = `Hi 👋 My name is Peter Parker
=============================

Web Developer
-------------

* 🌍  I'm located in London, England
* 🖥️  Check out my portfolio at [peterparker.com](http://peterparker.com)
* ✉️  You can Reach me at [peter@pparker.com](mailto:peter@pparker.com)
* 🚀  I'm currently working on [peterparker.com](http://peterparker.com)
* 🧠  I'm learning a new JavaScript framework
* 🤝  I'm open to collaborating on interesting JavaScript projects
* ⚡  I moonlight as a super hero`;

  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      {/* First Section */}

      <section className="py-12 px-8 md:py-18 xl:px-0 mt-20">
        <div className="mx-auto max-w-6xl space-y-8 md:space-y-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-8 text-center lg:px-8">
            <h1 className="text-6xl font-semibold text-heading md:text-8xl font-[sff]">
              Create Stunning Markdown Profiles With{" "}
              <font className="text-brand"> DDOX</font>.
            </h1>
            <p className="text-lg font-medium md:max-w-3xl">
              An open-source tool designed to assist you in effortlessly
              crafting markdown profiles in the simplest manner imaginable.{" "}
            </p>
            <button
              onClick={() => {
                router.push("/create-profile");
              }}
              className="rounded-full transition-all duration-150 ease-in-out btn-brand btn-sm sm:btn-md md:btn-lg"
            >
              Create Profile now
            </button>
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="flex -space-x-4">
                <img
                  src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/randy-warren.png"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-16 md:w-16"
                />
                <img
                  src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/irina-zaytesev.png"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-16 md:w-16"
                />
                <img
                  src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/pasquale-blanco.png"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-16 md:w-16"
                />
                <img
                  src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/nicholas-turner.png"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-16 md:w-16"
                />
                <img
                  src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/dianne-russell.png"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-16 md:w-16"
                />
                <div className="grid h-14 w-14 place-content-center rounded-full bg-layer-2 font-medium dark:bg-layer-3 md:h-16 md:w-16 bg-black text-white">
                  +145
                </div>
              </div>
              <div className="grid h-14 w-max ml-10 place-content-center rounded-full bg-layer-2 font-medium ">
                Recommended By Git Folks!
              </div>
            </div>
          </div>

          <div className=" rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <SyntaxHighlighter language="markdown" style={nord} showLineNumbers>
              {codeString}
            </SyntaxHighlighter>
            {/* <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/screenshot.png"
              alt=""
              className=" w-full rounded-3xl object-cover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
            />

            */}
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="z-10 w-full flex items-center bg-light-100 dark:bg-dark-800 h-auto font-[sff]">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={slideUpContainer}
          transition={{
            y: { type: "spring", bounce: 0.3, duration: 0.6 },
            default: { duration: 2 },
          }}
          className="container mx-auto flex flex-col items-center"
        >
          
        {/*<div className="w-full sm:w-[95%] flex relative">
            <div className="absolute w-full h-full "></div>

            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/screenshot.png"
              className="overflow-hidden rounded-md shadow-dark-900/5"
              width="100%"
              alt="Screenshot of DDOX.dev"
            />
          </div>
           */}
        </motion.article>
      </section>

      {/* Third Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start">
          <div className="flex flex-col md:flex-row w-full items-center gap-x-8 gap-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideFromLeft}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-y-4"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
                Highlight your <span className="text-black">Talents.</span>
              </h2>
              <p className="text-lg text-center md:text-left mb-0">
                Select from over 60 core languages, frameworks, backend
                technologies and web 3 tech.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideFromRight}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="flex flex-col gap-y-4 md:ml-auto"
            >
              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="C icon"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="HTML5"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="JavaScript"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="TypeScript"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="PHP"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Vue JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Supabase"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Figma"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="React JS"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Next JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Nest JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Angular JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Babel"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Babel"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Python"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Firebase"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Flutter"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Express JS"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg"
                    width="100%"
                    className="hidden dark:flex scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Express JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Gatbsy"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="GraphQL"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Bootstrap"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Swift"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Dart"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Svelte"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="SaaS"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </section>
      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start justify-center">
          <div className="flex flex-col-reverse md:flex-row w-full items-center gap-x-8 gap-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideFromLeft}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/polywork.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Polywork"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Facebook"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Instagram"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/hashnode.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Hashnode"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="CodeSandbox"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="CodeSandbox"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitch.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Twitch"
                  />
                </div>
              </div>

              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Stack Overflow"
                  />
                </div>

                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="YouTube"
                  />
                </div>

                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Discord"
                  />
                </div>

                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/dribbble.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Dribbble"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12"></div>
              </div>

              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                    width="100%"
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="X"
                  />
                </div>

                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Medium"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Medium"
                  />
                </div>

                <div className="w-10 sm:w-12 md:w-12">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/threads.svg"
                    width="100%"
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Threads"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/threads-dark.svg"
                    width="100%"
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Threads"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12"></div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideFromRight}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="flex grow flex-col md:items-end justify-end items-center gap-y-4 md:ml-auto"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
                Share your <span className="text-brand">socials</span>
              </h2>
              <p className="text-lg mb-0">
                Add links to all of your social profiles and blogs in seconds.
              </p>
            </motion.div>
          </div>
        </article>
      </section>

      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromLeft}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="flex w-full md:w-1/2 flex-col items-center md:items-start gap-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
              Add some <span className="text-brand">stats</span>
            </h2>
            <p className="text-lg text-center md:text-left mb-0">
              Show visitors some key facts through charts, graphs and badges.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromRight}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="w-full md:w-1/2 block relative"
          >
            <div className="dark:hidden block relative h-48 sm:h-80 overflow-hidden">
              <img
                src="/stats-illustration.svg"
                
                className="object-fit"
                alt="Statistics illustration"
              />
            </div>
            <div className="hidden dark:block relative h-48 sm:h-80 overflow-hidden">
              <img
                src="/stats-illustration-dark.svg"
                
                className="object-fit"
                alt="Statistics illustration"
              />
            </div>
          </motion.div>
        </article>
      </section>

      {/* Fourth Section */}
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex flex-col items-center justify-center md:px-48 gap-x-8 gap-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromBottom}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="flex w-full flex-col items-center gap-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-0">
              Copy your <span className="text-brand">snippet</span>
            </h2>
            <p className="text-lg text-center mb-0">
              When you&apos;re done, copy your profile code and you&apos;re
              ready to go!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromBottom}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="w-full relative"
          ></motion.div>
        </article>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
