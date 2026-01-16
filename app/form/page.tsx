"use client";

import { useForm } from "react-hook-form";
import { X } from "lucide-react";

type FormData = {
  name: string;
  placeOfBirth: string;
  timeOfBirth: string;
  timeOfBirthPeriod: string;
  dateOfBirth: string;
  email: string;
};

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/save-birth-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      reset();
      alert("Details saved successfully");
    } catch {
      alert("Failed to save data");
    }
  };

  return (
    /* Overlay */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* Dialog */}
      <div
        className="
          relative w-full max-w-md
          rounded-2xl px-8 py-7 text-center
          bg-black/55 backdrop-blur-xl
          border border-white/20
          shadow-[0_0_60px_rgba(255,255,255,0.08)]
          text-white
        "
      >
        {/* Close */}
        <button
          onClick={() => history.back()}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-white/60">
          Pre-Registration
        </p>

        <h1 className="mt-3 text-2xl font-semibold">
          Birth Details
        </h1>

        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Enter accurate birth details. This information is used only for analysis.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4 text-left"
        >
          {/* Name */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="glass-input"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Place */}
          <input
            {...register("placeOfBirth", { required: true })}
            placeholder="Place of Birth"
            className="glass-input"
          />

          {/* Birth Time with AM/PM */}
          <div className="grid grid-cols-3 gap-3">
            <input
              type="time"
              {...register("timeOfBirth", { required: true })}
              className="glass-input col-span-2"
              placeholder="Birth Time"
            />
            <select
              {...register("timeOfBirthPeriod", { required: true })}
              className="glass-input"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          {/* Date of Birth (dd-mm-yyyy format) */}
          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: true })}
              className="glass-input"
              placeholder="DD-MM-YYYY"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Gmail Address"
              className="glass-input"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              mt-4 w-full rounded-full
              border border-white/40
              px-8 py-3 text-sm uppercase tracking-widest
              text-white/80 transition-all
              hover:border-white hover:text-white
              hover:bg-white/5
              hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
            "
          >
            Submit Details
          </button>

          <p className="text-center text-[11px] text-white/50">
            No spam. Only launch updates.
          </p>
        </form>
      </div>
    </div>
  );
}
