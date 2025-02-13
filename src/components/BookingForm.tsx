import { useState } from 'react';
import type { Booking } from '../types';

export function BookingForm() {
  const [booking, setBooking] = useState<Partial<Booking>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real application, you would send this to your backend
      console.log('Booking details:', booking);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setBooking({});
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Booking failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Stay</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">
            Arrival Date
          </label>
          <input
            type="date"
            id="arrivalDate"
            onChange={(e) => setBooking({ ...booking, arrivalDate: new Date(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            onChange={(e) => setBooking({ ...booking, departureDate: new Date(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="members" className="block text-sm font-medium text-gray-700">
            Number of Members
          </label>
          <input
            type="number"
            id="members"
            min="1"
            onChange={(e) => setBooking({ ...booking, numberOfMembers: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            onChange={(e) => setBooking({ ...booking, mobile: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-3 bg-green-100 text-green-700 rounded-md">
            Booking request submitted successfully! We'll contact you shortly.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            Something went wrong. Please try again later.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </div>
    </form>
  );
}