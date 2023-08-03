import Image from "next/image"
import axios from "axios"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  return "http://localhost:3000"
}

async function getData() {
  const res = await axios.get(`${getBaseUrl()}/api/shops/yahoo`)
  console.log(res.data.data, "**********")

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.data.data
}

export default async function Home() {
  const data = await getData()

  console.log(data, "data")

  return (
    <main className="">
      {data?.map((value: string) => (
        <img src={value} alt="" />
      ))}
    </main>
  )
}
