"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  placeOfBirth: string;
  timeOfBirth: string;
  timeOfBirthPeriod: string;
  dateOfBirth: string;
  email: string;
};

const loveVideos = [
  { src: "/videos/vdo.mp4" },
  { src: "/videos/vdo1.mp4" },
  { src: "/videos/vdo2.mp4" },
  { src: "/videos/vdo3.mp4" },
];

const destinyVideos = [
  { src: "/videos/vdo4.mp4" },
  { src: "/videos/vdo5.mp4" },
  { src: "/videos/vdo6.mp4" },
  { src: "/videos/vdo7.mp4" },
  { src: "/videos/vdo8.mp4" },
  { src: "/videos/vdo9.mp4" },
  { src: "/videos/vdo10.mp4" },
];

export default function VideoCarousel() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <section className="relative w-full py-28 bg-black overflow-hidden">
        {/* ---------------------- VIDEO GRID ---------------------- */}
        <div className="flex flex-col gap-0 relative z-10">
          <div className="flex w-full">
            {loveVideos.map((item, index) => (
              <VideoCard
                key={index}
                src={item.src}
                width="w-[25vw]"
                height="h-[45vh]"
              />
            ))}
          </div>

          <div className="flex w-full">
            {destinyVideos.map((item, index) => (
              <VideoCard
                key={index}
                src={item.src}
                width="w-[14.28vw]"
                height="h-[35vh]"
              />
            ))}
          </div>
        </div>

        {/* ---------------------- CENTER OVERLAY CTA ---------------------- */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div
            className="
              pointer-events-auto
              max-w-md
              text-center
              px-10 py-8
              rounded-2xl
              bg-black/55
              backdrop-blur-xl
              border border-white/20
              shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >
            <p className="text-xs tracking-widest uppercase text-white/60">
              Pre-Registration
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              We're testing something special
            </h2>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              This is an early access test.
              Pre-register now and we'll notify you the moment we go live.
            </p>

            <button
              onClick={handleOpenForm}
              className="
                mt-6
                w-full
                border border-white/40
                hover:border-white
                transition-all
                px-8 py-3
                rounded-full
                text-sm
                tracking-widest
                uppercase
                text-white/80
                hover:text-white
                hover:bg-white/5
                hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
              "
            >
              Join Pre-Registration
            </button>

            <p className="mt-3 text-[11px] text-white/50">
              No spam. Only launch updates.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------- FORM DIALOG BOX ---------------------- */}
      {showForm && <FormDialog onClose={handleCloseForm} />}
    </>
  );
}

/* --------- FORM DIALOG COMPONENT ---------- */
function FormDialog({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Format the date to dd-mm-yyyy
      const formattedData = {
        ...data,
        dateOfBirth: data.dateOfBirth.split("-").reverse().join("-"),
      };

      const res = await fetch("/api/save-birth-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!res.ok) throw new Error("Failed");

      reset();
      alert("Details saved successfully");
      onClose();
    } catch {
      alert("Failed to save data");
    }
  };

  return (
    /* Overlay */
    <div
      className="
        fixed inset-0 z-50 
        flex items-center justify-center 
        bg-black/60 backdrop-blur-sm 
        px-4
        animate-fadeIn
      "
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Dialog */}
      <div
        className="
          relative w-full max-w-md
          rounded-2xl px-8 py-7 text-center
          bg-black/55 backdrop-blur-xl
          border border-white/20
          shadow-[0_0_60px_rgba(255,255,255,0.08)]
          text-white
          animate-scaleIn
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 
            text-white/60 hover:text-white 
            transition p-1
            hover:bg-white/10 rounded-full
          "
        >
          <X size={20} />
        </button>

        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-white/60">
          Pre-Registration
        </p>

        <h1 className="mt-3 text-2xl font-semibold">Birth Details</h1>

        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Enter accurate birth details. This information is used only for analysis.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4 text-left"
          noValidate
        >
          {/* Name */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="
                glass-input
                w-full px-4 py-3
                bg-white/5
                border border-white/20
                rounded-lg
                text-white
                placeholder-white/50
                focus:outline-none
                focus:border-white/40
                transition
              "
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Place of Birth */}
          <div>
            <input
              {...register("placeOfBirth", { required: "Place of birth is required" })}
              placeholder="Place of Birth"
              className="
                glass-input
                w-full px-4 py-3
                bg-white/5
                border border-white/20
                rounded-lg
                text-white
                placeholder-white/50
                focus:outline-none
                focus:border-white/40
                transition
              "
            />
            {errors.placeOfBirth && (
              <p className="mt-1 text-xs text-red-400">Place of birth is required</p>
            )}
          </div>

          {/* Birth Time with AM/PM */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <input
                type="time"
                {...register("timeOfBirth", { required: true })}
                className="
                  glass-input
                  w-full px-4 py-3
                  bg-white/5
                  border border-white/20
                  rounded-lg
                  text-white
                  placeholder-white/50
                  focus:outline-none
                  focus:border-white/40
                  transition
                "
              />
              {errors.timeOfBirth && (
                <p className="mt-1 text-xs text-red-400">Birth time is required</p>
              )}
            </div>
            <div>
              <select
                {...register("timeOfBirthPeriod", { required: true })}
                className="
                  glass-input
                  w-full px-4 py-3
                  bg-white/5
                  border border-white/20
                  rounded-lg
                  text-white
                  focus:outline-none
                  focus:border-white/40
                  transition
                  cursor-pointer
                "
                defaultValue="AM"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className="
                glass-input
                w-full px-4 py-3
                bg-white/5
                border border-white/20
                rounded-lg
                text-white
                placeholder-white/50
                focus:outline-none
                focus:border-white/40
                transition
              "
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-red-400">
                {errors.dateOfBirth.message}
              </p>
            )}
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
              placeholder="Email Address"
              className="
                glass-input
                w-full px-4 py-3
                bg-white/5
                border border-white/20
                rounded-lg
                text-white
                placeholder-white/50
                focus:outline-none
                focus:border-white/40
                transition
              "
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
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
              disabled:opacity-50 disabled:cursor-not-allowed
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

function VideoCard({
  src,
  width,
  height,
}: {
  src: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={`
        relative ${width} ${height}
        overflow-hidden 
        rounded-[22px]
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        bg-[#111]
        transition-all duration-500
        hover:scale-[1.03]
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-[3]" />

      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
      />

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] z-[4]" />
    </div>
  );
}
