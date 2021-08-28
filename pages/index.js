// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from 'domains/Home'

export default Home

export async function getStaticProps({ locale }) {
  return {
    props: {
      // ...(await serverSideTranslations(locale, ['Home'])),
    },
  }
}
