import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles'

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <p className="bg-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam cum doloremque eum facilis fugiat,
        laborum minima optio quam quisquam rem suscipit tempora? Dolor facilis ipsum optio quaerat voluptas.
      </p>
      <p>
        Accusamus atque blanditiis commodi consectetur consequatur cumque delectus dolore eaque eos, esse et ex expedita
        labore laudantium maiores molestias neque numquam porro possimus praesentium quisquam recusandae reiciendis
        repellendus veritatis voluptate.
      </p>
      <p>
        A ab assumenda beatae deserunt dicta fugiat ipsa ipsum, magni nisi non officiis optio, possimus quibusdam
        tempora tempore velit, voluptatibus. Ad aspernatur commodi distinctio dolorum eum exercitationem quas similique
        vel.
      </p>
      <style jsx>{styles}</style>
    </>
  )
}

export default Home
