'use client';

import { useState } from 'react';
import { EducationalPathway, BookingFormData } from '@/types';

interface BookingFormProps {
  pathways: EducationalPathway[];
}

export function BookingForm({ pathways }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    pathwayId: '',
    scheduledFor: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Booking created successfully!' });
        setFormData({ pathwayId: '', scheduledFor: '', notes: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to create booking' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="pathwayId" className="block text-sm font-medium text-gray-700 mb-1">
          Educational Pathway
        </label>
        <select
          id="pathwayId"
          name="pathwayId"
          value={formData.pathwayId}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select a pathway</option>
          {pathways.map((pathway) => (
            <option key={pathway.id} value={pathway.id}>
              {pathway.course} - {pathway.className} ({pathway.stream})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="scheduledFor" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Date & Time
        </label>
        <input
          type="datetime-local"
          id="scheduledFor"
          name="scheduledFor"
          value={formData.scheduledFor}
          onChange={handleChange}
          required
          min={new Date().toISOString().slice(0, 16)}
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="input-field"
          placeholder="Any specific topics you'd like to discuss..."
        />
      </div>

      {message && (
        <div className={`p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Booking...' : 'Book Session'}
      </button>
    </form>
  );
}
