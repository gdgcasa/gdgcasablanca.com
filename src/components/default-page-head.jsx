import Head from 'next/head'

export default function DefaultPageHead({ title }) {
  return (
    <Head>
      <title>{!title ? null : `${title} | `}GDG Casablanca</title>
      <meta name='description' content='GDG Casablanca' />
      <link rel='icon' type='image/png' href='/gdg-casa-icon.png' />
    </Head>
  )
}
