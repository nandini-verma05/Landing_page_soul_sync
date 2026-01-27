"use client";

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock as ClockIcon, X } from 'lucide-react';

type FormData = {
  name: string;
  placeOfBirth: string;
  dateOfBirth: string;
  timeOfBirth: string;
  timeOfBirthPeriod: string;
  email: string;
};

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    placeOfBirth: '',
    dateOfBirth: '',
    timeOfBirth: '',
    timeOfBirthPeriod: 'AM',
    email: ''
  });
const [currentMonth, setCurrentMonth] = useState(new Date());
const [errors, setErrors] = useState<Record<string, string>>({});
const [showSuccess, setShowSuccess] = useState(false);
const [showCalendarModal, setShowCalendarModal] = useState(false);
const [showTimeModal, setShowTimeModal] = useState(false);
const [loading, setLoading] = useState(false);

const currentYear = currentMonth.getFullYear();
const currentMonthIndex = currentMonth.getMonth();

// year range (±60 years from current year)
const years = Array.from({ length: 120 }, (_, i) => currentYear - 60 + i);

const changeMonth = (offset: number) => {
  setCurrentMonth(new Date(currentYear, currentMonthIndex + offset, 1));
};

const changeYear = (year: number) => {
  setCurrentMonth(new Date(year, currentMonthIndex, 1));
};

  const [time, setTime] = useState({
    hour: 12,
    minute: 0,
    second: 0,
    period: 'AM'
  });

  // Sync time to form
  useEffect(() => {
    let hh = time.hour;
    if (time.period === 'PM' && hh !== 12) hh += 12;
    if (time.period === 'AM' && hh === 12) hh = 0;

    const formatted = `${hh.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}:${time.second.toString().padStart(2, '0')}`;
    
    setFormData(prev => ({
      ...prev,
      timeOfBirth: formatted,
      timeOfBirthPeriod: time.period
    }));
  }, [time]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

const handleDateSelect = (day: number) => {
  const selected = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    day,
    12, 0, 0 // ✅ force noon to avoid timezone shift
  );

  const formattedDate = selected.toISOString().split("T")[0];

  setFormData({ ...formData, dateOfBirth: formattedDate });
  setShowCalendarModal(false);
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = 'Place of Birth is required';
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.timeOfBirth.trim()) newErrors.timeOfBirth = 'Time of Birth is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/save-birth-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed');

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          placeOfBirth: '',
          dateOfBirth: '',
          timeOfBirth: '',
          timeOfBirthPeriod: 'AM',
          email: ''
        });
        setTime({ hour: 12, minute: 0, second: 0, period: 'AM' });
      }, 3000);
    } catch (err) {
      setErrors({ submit: 'Failed to save data' });
    } finally {
      setLoading(false);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg px-4">
        <div className="relative w-full max-w-md rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 px-8 py-7 text-white shadow-[0_0_80px_rgba(255,255,255,0.08)]">
          
          <button
            onClick={() => window.history.back()}
            className="absolute right-4 top-4 text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>

          <p className="text-[11px] tracking-[0.25em] uppercase text-white/50">Pre-Registration</p>
          <h1 className="mt-2 text-2xl font-semibold">Birth Details</h1>
          <p className="mt-2 text-sm text-white/60">Accurate details help generate precise insights.</p>

          <div className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label className="text-xs text-white/60">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            {/* Place of Birth */}
            <div>
              <label className="text-xs text-white/60">Place of Birth</label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                placeholder="City, Country"
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
              />
              {errors.placeOfBirth && <p className="text-xs text-red-400 mt-1">{errors.placeOfBirth}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="text-xs text-white/60">Date of Birth</label>
              <button
                type="button"
                onClick={() => setShowCalendarModal(true)}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-left flex items-center justify-between hover:bg-white/15 transition-all"
              >
                <span className="text-sm">{formData.dateOfBirth || 'Select date'}</span>
                <CalendarIcon size={16} className="text-white" />
              </button>
              {errors.dateOfBirth && <p className="text-xs text-red-400 mt-1">{errors.dateOfBirth}</p>}
            </div>

            {/* Time of Birth */}
            <div>
              <label className="text-xs text-white/60">Time of Birth</label>
              <button
                type="button"
                onClick={() => setShowTimeModal(true)}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-left flex items-center justify-between hover:bg-white/15 transition-all"
              >
                <span className="text-sm">{formData.timeOfBirth || '00:00:00'}</span>
                <ClockIcon size={16} className="text-white" />
              </button>
              {errors.timeOfBirth && <p className="text-xs text-red-400 mt-1">{errors.timeOfBirth}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-white/60">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@gmail.com"
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-full bg-white text-black py-3 text-sm tracking-widest hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Details'}
            </button>

            <p className="text-center text-[11px] text-white/40">No spam. Only important updates.</p>
          </div>
        </div>
      </div>

     {/* Calendar Modal */}
{showCalendarModal && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/70 backdrop-blur-lg"
    onClick={() => setShowCalendarModal(false)}
  >
    <div
      className="relative w-full max-w-sm rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-6 text-white shadow-[0_0_80px_rgba(255,255,255,0.08)]"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-white font-semibold text-lg mb-4">
        Select Date
      </h2>

      {/* MONTH + YEAR CONTROLS */}
      <div className="flex items-center justify-between mb-4 gap-3">

        {/* Month Control */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="text-white hover:bg-white/10 p-2 rounded transition"
          >
            ←
          </button>

          <span className="text-sm font-medium min-w-[90px] text-center">
            {currentMonth.toLocaleString("en-US", {
              month: "long",
            })}
          </span>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="text-white hover:bg-white/10 p-2 rounded transition"
          >
            →
          </button>
        </div>

        {/* Year Scroll */}
        <div className="relative w-24">
          <div className="h-20 overflow-y-auto rounded-lg border border-white/15 bg-black/40 scrollbar-hide">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => changeYear(year)}
                className={`w-full py-1 text-sm transition ${
                  year === currentYear
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div
            key={day}
            className="text-center text-gray-400 text-xs font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* DATES */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => handleDateSelect(day)}
            className="p-2 text-white text-sm rounded hover:bg-white/20 transition aspect-square flex items-center justify-center"
          >
            {day}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowCalendarModal(false)}
        className="w-full rounded-full bg-white text-black py-2 text-sm tracking-widest hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* Time Modal */}
      {showTimeModal && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/70 backdrop-blur-lg"
    onClick={() => setShowTimeModal(false)}
  >
    <div
      className="relative w-full max-w-sm rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-8 text-white shadow-[0_0_80px_rgba(255,255,255,0.08)]"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-semibold text-lg mb-6 text-center">
        Set Time of Birth
      </h2>

      <div className="space-y-6">
        {/* Time Inputs */}
        <div className="flex gap-2 justify-center items-center">
          {/* Hour */}
          <input
            type="text"
            inputMode="numeric"
            placeholder="HH"
            value={time.hour}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "");
              if (v === "") return setTime({ ...time, hour: "" });
              const num = Math.min(12, Math.max(1, Number(v)));
              setTime({ ...time, hour: num });
            }}
            className="w-16 bg-white/10 border border-white/20 rounded px-2 py-3 text-center text-lg"
          />

          <span className="text-2xl">:</span>

          {/* Minute */}
          <input
            type="text"
            inputMode="numeric"
            placeholder="MM"
            value={time.minute}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "");
              if (v === "") return setTime({ ...time, minute: "" });
              const num = Math.min(59, Math.max(0, Number(v)));
              setTime({ ...time, minute: num });
            }}
            className="w-16 bg-white/10 border border-white/20 rounded px-2 py-3 text-center text-lg"
          />

          <span className="text-2xl">:</span>

          {/* Second */}
          <input
            type="text"
            inputMode="numeric"
            placeholder="SS"
            value={time.second}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "");
              if (v === "") return setTime({ ...time, second: "" });
              const num = Math.min(59, Math.max(0, Number(v)));
              setTime({ ...time, second: num });
            }}
            className="w-16 bg-white/10 border border-white/20 rounded px-2 py-3 text-center text-lg"
          />
        </div>

        {/* AM / PM */}
        <div className="flex gap-3">
          {["AM", "PM"].map((p) => (
            <button
              key={p}
              onClick={() => setTime({ ...time, period: p })}
              className={`flex-1 py-3 rounded-full border text-sm tracking-widest ${
                time.period === p
                  ? "bg-white text-black border-white"
                  : "border-white/30 text-white/60"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Display (formatted safely) */}
        <div className="text-center py-6 border-t border-b border-white/20">
          <div className="text-4xl font-semibold tracking-wider">
            {String(time.hour || "00").padStart(2, "0")}:
            {String(time.minute || "00").padStart(2, "0")}:
            {String(time.second || "00").padStart(2, "0")}
          </div>
          <div className="text-sm text-white/60 mt-2">
            {time.period}
          </div>
        </div>

        <button
          onClick={() => setShowTimeModal(false)}
          className="w-full rounded-full bg-white text-black py-3 text-sm tracking-widest"
        >
          Done
        </button>
      </div>
    </div>
  </div>
)}


      {/* Success Dialog */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/70 backdrop-blur-lg">
          <div className="relative w-full max-w-xs rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-8 text-white shadow-[0_0_80px_rgba(255,255,255,0.08)] text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Success!</h2>
            <p className="text-gray-300 text-sm mb-4">Your birth details have been submitted successfully.</p>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="w-full rounded-full bg-white text-black py-2 text-sm tracking-widest hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}