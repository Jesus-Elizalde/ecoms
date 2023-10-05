import Layout from "./components/layout";

// _app.tsx
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
