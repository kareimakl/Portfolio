// 'use client'
import { Button } from '@/components/Button'
// import { useRouter } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// function MailIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   )
// }
export function BookFree15() {
  // const [IsLoading, setIsLoading] = useState(true)
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // const [errors, setErrors] = useState({})
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const router = useRouter()
  // const isFormValid = formData.name && formData.email && formData.message
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1200)

  //   return () => clearTimeout(timer)
  // }, [])

  // const validateForm = () => {
  //   let newErrors = {}
  //   if (!formData.name.trim()) newErrors.name = 'Required Name'
  //   if (!formData.email.trim()) {
  //     newErrors.email = 'Required Email'
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = 'Invalid Email'
  //   }
  //   if (!formData.message.trim()) newErrors.message = 'Invalid Message'

  //   setErrors(newErrors)
  //   return Object.keys(newErrors).length === 0
  // }

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!validateForm()) return

  //   setIsSubmitting(true)
  //   try {
  //     const response = await fetch('https://formspree.io/f/mvgpowlg', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     })

  //     if (response.ok) {
  //       setFormData({ name: '', email: '', message: '' })
  //       toast.success('Message sent successfully!')
  //       router.push('/thank-you')
  //     } else {
  //       toast.error('An error occurred while sending!')
  //     }
  //   } catch (error) {
  //     toast.error('Server connection error.')
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <form
      // onSubmit={handleSubmit}
      action="https://formspree.io/f/mvgpowlg"
      method="POST"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {/* <MailIcon className="h-6 w-6 flex-none" /> */}
        <span className="ml-3">Book a Free 15-Minute Consultation</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Book your free 15-minute consultation to discuss building a new website
        or improving your existing one. Limited slots available.
      </p>
      <div className="mt-6 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Full Name"
          aria-label="Full Name"
          name="name"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          name="email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none">
          Book Now
        </Button>
      </div>
    </form>
  )
}
