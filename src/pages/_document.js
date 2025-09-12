import Document, { Html, Head, Main, NextScript } from 'next/document'

// TODO: update this meta data
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/Lacuna-Codex-Logo.png" width='20px' height='27px' />
          <meta property="og:url" content="/" /> <meta property="og:image" content="/Lacuna-Codex-Logo.png" /> <meta property="og:title" content="Lacuna-Codex" /> <meta property="og:type" content="website" /> <meta property="og:locale" content="en_US" /> <meta property="og:description" content="Lacuna-Codex: TODO: Update Description" />
          <meta property="twitter:image" content="/Lacuna-Codex-Logo.png" /> <meta property="twitter:card" content="summary_large_image" /> <meta property="twitter:title" content="Plan Weave" /> <meta property="twitter:description" content="Lacuna-Codex: TODO: Update Description" />
          <meta httpEquiv="content-language" content="en" /><meta charSet="UTF-8" />
          <meta name="keywords" content="TODO: update content" /> <meta name="author" content="Connor Keenum" /> <meta name="description" content="Lacuna-Codex: TODO: Update Description" /> <meta name="page-topic" content="Productivity" /> <meta name="page-type" content="Task Management" /> <meta name="audience" content="Everyone" /> <meta name="robots" content="index, follow" />
        </Head>
        <body><Main /><NextScript /></body>
      </Html>
    )
  }
}
export default MyDocument