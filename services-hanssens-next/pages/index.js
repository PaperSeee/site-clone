import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Service Hanssens</title>
        <meta
          name="description"
          content="Debouchage rapide et fiable en Belgique, intervention 24/7."
        />
      </Head>

      <main id="main" className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1>Service Hanssens</h1>
        <p>Debouchage rapide et fiable, intervention 24/7.</p>
        <p>
          Telephone: <a href="tel:0497694937">0497 69 49 37</a>
        </p>
      </main>
    </>
  )
}
