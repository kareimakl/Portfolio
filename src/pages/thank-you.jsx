import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Your free consultation! - KARIM AKL</title>
        <meta
          name="description"
          content="Thanks you for booking your free consultation!"
        />
      </Head>
      <SimpleLayout
        title="Thank you for booking your free consultation!"
        intro="I’ll reach out to you shortly to confirm your appointment and discuss your website needs. Feel free to ask any questions you may have during our session. You can always cancel or reschedule if needed."
      >
        <Button
          href="https://api.whatsapp.com/send/?phone=201558820103&text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D9%83%D8%B1%D9%8A%D9%85%20%D8%B9%D9%82%D9%84%20%D8%A3%D8%B1%D8%B3%D9%84%20%D9%87%D8%B0%D9%87%20%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%20%D9%85%D9%86%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%B2%D8%B1%D8%AA%D9%87%7Bkarim.akl-bs.com%7D.%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%AA%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D8%A3%D9%88%20%D8%AA%D8%AD%D8%B3%D9%8A%D9%86%20%D9%85%D9%88%D9%82%D8%B9%D9%8A.%20%D8%A3%D8%B1%D8%AC%D9%88%20%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8.%20%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!&type=phone_number&app_absent=0"
          target="_blank"
          className="flex-none">Contact me on WhatsApp</Button>
      </SimpleLayout>
    </>
  )
}
