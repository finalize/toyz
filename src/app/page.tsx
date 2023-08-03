import Image from "next/image"
import axios from "axios"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  return "http://127.0.0.1:3000"
}

async function getData() {
  const res = await fetch(`${getBaseUrl()}/api/shops/yahoo`).then(async (v) => {
    return await v.json()
  })

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res
}

export default async function Home() {
  const data = await getData()

  // console.log(data, "data")

  return (
    <main className="">
      {data?.data.map((value: string) => (
        <img src={value} alt="" />
      ))}
    </main>
  )
}
