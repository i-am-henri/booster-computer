import { getPages } from "@/app/source"
import Link from "next/link"

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] p-3 space-y-2">
      <div>
        <h2 className="text-2xl font-medium">Booster Documentation</h2>
        <p>The booster documentation is a great quickstart for getting started with Booster.</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {
          getPages().map((file, index) => {
            return <Link href={`/docs/${file.slugs}`} className="p-2 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-200" key={index}>
              <h1 className="text-2xl">{file.data.title}</h1>
              <div className="prose">
                {file.data.description}
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}
