import Image from "next/image"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return "https://your-production.url"
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  return "http://localhost:3000"
}

async function getData() {
  console.log(process.env, getBaseUrl())
  const res = await fetch(`${getBaseUrl()}/api/shops/yahoo`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="">
      {data?.data.map((value: string) => (
        <img src={value} alt="" />
      ))}
    </main>
  )
}
