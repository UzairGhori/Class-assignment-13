import Link from "next/link";

export default async function Home() {
  const url = await fetch ("https://simple-books-api.glitch.me/books")
  const data = await url.json()
  console.log(data)
  return (
    <div>
      {
        data.map((book : any) => (
// eslint-disable-next-line react/jsx-key
<div>
  <Link href={`${book.id}`}>
      <h1 className="text-5xl justify-center items-center">
       {book.name}
      </h1>
      </Link>
      </div>
        ))
      }
    </div>
  );
}