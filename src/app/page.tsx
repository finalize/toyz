import Image from "next/image"

async function getData() {
  console.log(process.env.NEXT_PUBLIC_API_DOMAIN)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/shops/yahoo`
  )
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
