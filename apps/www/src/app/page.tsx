import FadeToTop from "@/components/animations/fade-to-top";
import Header from "@/components/elements/header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "ui";

export default function Home() {
  return (
    <div className="items-center flex flex-col bg-stone-100 min-h-screen">
      <Header />
      <FadeToTop className="pt-24 lg:w-[700px]">
        <h2 className="text-5xl font-medium ">
          Bootstrap your next app faster than ever before
        </h2>
        <p className="mt-2 text-[#343434] ">
          Preconfigure your app online, learn which dependency regulates what and share it with your friends online. This is booster.
        </p>
        <div className="flex mt-2 space-x-3">
          <Link href="/start">
            <Button>start now</Button>
          </Link>
          <Link href="/tutorial">
            <Button>see a tutorial</Button>
          </Link>
        </div>
      </FadeToTop>
      <section className="lg:w-[800px]">
        <Image src={"/example.png"} alt="example image of the cli in action" width={800} height={800} className="rounded-xl mt-7" />
      </section>
      <section className="lg:w-[700px] mt-5">
        <hr />

        <h2 className="text-3xl mt-5 font-medium">
          Configure your application <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-transparent bg-clip-text animate-text">online</span>
        </h2>
        <p className="mt-3 text-[#343434]">
          In normal nextjs templates you get access to a github repository, like <Link href="https://shipfa.st" className="underline" target="_blank">shipfast</Link>. We take an other approach. You can canfigure your app online, with a nice gui. This allows to explain what you are doing. Later, you can download your template or add it to an existing project. This is possible via the cli or you can do it mannualy with an auto-generated documentation.
        </p>
      </section>
      <section className="mt-5 lg:w-[700px] mb-5">
        <hr />
        <h2 className="text-3xl font-medium mt-5">
          Start now, boost your app
        </h2>
        <p className="text-[#343434]">A project, done by <Link className="underline" href={"https://henri.gg"} target="_blank">henri</Link>.</p>
      </section>
    </div>
  )
}