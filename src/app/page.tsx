import Image from "next/image"

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  return "http://localhost:3000"
}

async function getData() {
  const res = await fetch(`${getBaseUrl()}/api/shops/yahoo`)
  console.log(getBaseUrl(), "getBaseUrl")

  const data = await res.json()

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok || !Array.isArray(data?.data)) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  return data?.data ?? []
  // return res.json()
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
