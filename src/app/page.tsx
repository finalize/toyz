import Image from "next/image"
import axios from "axios"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  return "http://127.0.0.1:3000"
}

export default async function Home() {
  return (
    <main className="">
      <img
        src="https://img.mandarake.co.jp/webshopimg/02/01/789/0201945789/s_02019457890.jpg"
        alt=""
      />
    </main>
  )
}
