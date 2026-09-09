import { useState, type FormEvent } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

const checklist = [
    'Discuss your business requirements',
    'Get a personalised product demo - in future if product is completed',
    'Discuss pricing, plans and add-ons - just Lakcha rupae',
]

const contactCards = [
    { icon: 'call', label: 'Call', value: '+91 789456123' },
    { icon: 'mail', label: 'Email', value: 'noidea@gmail.io' },
    { icon: 'location_on', label: 'Offices', value: 'WFH-Lease completed' },
    { icon: 'chat_bubble', label: 'Reply within', value: '100 business days ' },
]

const employeeCountOptions = [
    { value: 'RANGE_1_50', label: '1-50' },
    { value: 'RANGE_51_200', label: '51-200' },
    { value: 'RANGE_201_500', label: '201-500' },
    { value: 'RANGE_501_1000', label: '501-1000' },
    { value: 'RANGE_1000_PLUS', label: '1000+' },
]

type FormState = {
    firstName: string
    lastName: string
    email: string
    phone: string
    designation: string
    company: string
    employeeCount: string
    message: string
}

const initialFormState: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    designation: '',
    company: '',
    employeeCount: '',
    message: '',
}

const ContactLandingPage = () => {
    const [form, setForm] = useState<FormState>(initialFormState)
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }))
        }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)

        try {
            const response = await fetch(`${API_BASE_URL}/v1/api/lead_capture`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    phoneNumber: form.phone,
                    designation: form.designation,
                    companyName: form.company,
                    employeeCount: form.employeeCount || null,
                    message: form.message,
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to submit enquiry')
            }

            setSubmitted(true)
        } catch {
            setError('Something went wrong while submitting your enquiry. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="h-screen overflow-hidden bg-white">
            <div className="mx-auto grid h-full max-w-7xl items-center gap-8 px-6 py-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
                {/* Left column */}
                <div>
                    {/* <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-900">
                        Book a Demo
                    </span> */}

                    <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                        Talk to an Specialist
                        <br />
                        <span className="text-blue-900">which is not me</span>
                    </h1>

                    <p className="mt-4 max-w-md text-sm text-slate-600">
                        Tell us a bit about your team. Teluskuni em chyam, just a formality.
                        <br />
                        Nachite one day try chyu adi elago nachadu adi varey vishyam
                        <br />
                        Mundu vadi chudandi tarvta namandi(Elago radu so dont worry)
                    </p>

                    <ul className="mt-6 space-y-2.5">
                        {checklist.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-900 text-white">
                                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                                        check
                                    </span>
                                </span>
                                <span className="text-sm text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {contactCards.map((card) => (
                            <div
                                key={card.label}
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                            >
                                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-blue-900 text-white">
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                        {card.icon}
                                    </span>
                                </span>
                                <div>
                                    <p className="text-xs text-slate-500">{card.label}</p>
                                    <p className="text-sm font-semibold text-slate-900">{card.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column */}
                <div className="rounded-2xl border-2 border-blue-900 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-extrabold text-slate-900">
                        Get In Touch <span className="text-blue-900">With Us</span>
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                        Have a great day in meantime our team will get back to you shortly.
                    </p>

                    <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <input
                                type="text"
                                required
                                placeholder="First Name *"
                                value={form.firstName}
                                onChange={handleChange('firstName')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                            <input
                                type="text"
                                required
                                placeholder="Last Name *"
                                value={form.lastName}
                                onChange={handleChange('lastName')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <input
                                type="email"
                                required
                                placeholder="Email *"
                                value={form.email}
                                onChange={handleChange('email')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                            <input
                                type="tel"
                                required
                                placeholder="Phone Number *"
                                value={form.phone}
                                onChange={handleChange('phone')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Designation"
                                value={form.designation}
                                onChange={handleChange('designation')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                            <input
                                type="text"
                                required
                                placeholder="Company Name *"
                                value={form.company}
                                onChange={handleChange('company')}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                        </div>

                        <select
                            value={form.employeeCount}
                            onChange={handleChange('employeeCount')}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-500 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                        >
                            <option value="">Employee Count</option>
                            {employeeCountOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <textarea
                            placeholder="Your Message"
                            rows={2}
                            value={form.message}
                            onChange={handleChange('message')}
                            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                        />

                        <div className="flex items-center justify-between pt-1">
                            <p className="text-xs text-slate-400">* Required fields</p>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="rounded-lg bg-blue-900 px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </div>

                        {submitted && (
                            <p className="text-sm font-medium text-blue-900">
                                Thanks! Your enquiry has been noted.
                            </p>
                        )}

                        {error && (
                            <p className="text-sm font-medium text-red-600">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactLandingPage
