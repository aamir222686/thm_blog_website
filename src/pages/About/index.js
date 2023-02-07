import Head from 'next/head';
import Container from '@mui/material/Container';
import Header from "../../components/header"

export default function About() {

  return (
    <>
      <Head>
            <title>About</title>
            <meta name="description" content="Automated Blog page, content generated by a machine AI with no human intervention" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
      </Head>
      <Header></Header>
      <Container maxWidth="xl" style={{ 'padding': "20px" }}>
            <h1>About</h1>
      </Container>
    </>
  )
}