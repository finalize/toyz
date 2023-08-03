import Image from "next/image"

async function getData() {
  const res = await fetch("http://localhost:3000/api/shops/yahoo")
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
