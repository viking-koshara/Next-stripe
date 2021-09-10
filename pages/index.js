import Head from 'next/head'
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
// import Post from './dashboard/index'

export default function Index() {

  const router = useRouter()

  useEffect(() => {    
    router.push('/dashboard')    
  }, [])

  return (
    // <div className={"Container"}>
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Post/> */}
    </>
    // </div>
  )
}
