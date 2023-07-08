import Image from 'next/image'
import Head from "next/head"
import Header from "../components/Header"
import Feed from "../components/Feed"
export default function Home() {
  return (
   <div>
    <Head>
      <title> CREATE nEXT APP</title>
    </Head>
    {/* Header */}
    <Header></Header>
    {/* Feed */}
    <Feed></Feed>
   </div>
  )
}
