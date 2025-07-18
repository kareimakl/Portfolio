'use client'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Contact() {
  const [IsLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const isFormValid = formData.name && formData.email && formData.message
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    let newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Required Name'
    if (!formData.email.trim()) {
      newErrors.email = 'Required Email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid Email'
    }
    if (!formData.message.trim()) newErrors.message = 'Invalid Message'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/mvgpowlg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        toast.success('Message sent successfully!')
        router.push('/thank-you')
      } else {
        toast.error('An error occurred while sending!')
      }
    } catch (error) {
      toast.error('Server connection error.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="mt-24 md:mt-28">
      <Head>
        <title>Contact - KARIM AKL</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <div className="mx-auto grid grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-1">
        <div className="w-full space-y-10">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <MailIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Contact Me</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Contact us now or send your message, and we’ll get back to you as
              soon as possible!
            </p>
            <div className="mt-6 flex gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-6 flex gap-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              {errors.message && (
                <p className="m-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`submit-button ${
                !isFormValid || isSubmitting
                  ? 'disabled cursor-not-allowed'
                  : ''
              } mt-6 flex-none`}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {IsLoading ? (
          <Loading />
        ) : (
          <div className="relative flex w-full rounded-xl">
            <iframe
              style={{ filter: 'grayscale(1) invert(1)' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110575.37317712563!2d31.258464!3d30.059488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1709099521790!5m2!1sen!2seg"
              className="h-[250px] w-full rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </Container>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
