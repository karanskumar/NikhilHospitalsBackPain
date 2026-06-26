import { useForm } from 'react-hook-form@7.55.0';
import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

// 1. Deploy the Apps Script (see README) as a Web App.
// 2. Paste the deployment URL below, replacing PASTE_YOUR_WEB_APP_URL_HERE.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwpZX-Ac_eKlH_rEofq7JUiip7_ZPXdqnxhh-pj4I6XC_q3laGk5EFjW5sHq9MOOdBl/exec';

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitted(true);
    toast.success('Thank you! Our spine care team will contact you shortly.');

    // Send the lead to the Google Sheet (skipped until the URL is set)
    if (SHEET_ENDPOINT && !SHEET_ENDPOINT.includes('PASTE_YOUR')) {
      try {
        await fetch(SHEET_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            ...data,
            source: 'Back Pain Landing Page',
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error('Lead submission failed:', err);
      }
    } else {
      console.log('Form submitted (no endpoint set yet):', data);
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            We've received your details. Our spine care team will contact you shortly to schedule your evaluation.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-2xl text-gray-900 mb-2 font-bold">Schedule Your Evaluation</h3>
            <p className="text-gray-600">Find out if you're a candidate — fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group font-semibold"
            >
              Schedule Your Evaluation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to receive communication from Nikhil Hospitals
            </p>
          </form>
        </>
      )}
    </div>
  );
}
