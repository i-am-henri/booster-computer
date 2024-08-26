import { getPages } from "@/app/source"

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="grid grid-cols-3">
        {
          getPages().map((file, index) => {
            return <div className="p-4" key={index}>
              <h1 className="text-2xl">{file.data.title}</h1>
              <div className="prose">
                {file.data.description}
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}