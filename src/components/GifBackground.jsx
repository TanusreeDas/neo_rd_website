'use client';

export default function GifBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <img
        src="/bg1.gif"
        alt="Decorative background"
        className="w-full h-full object-cover opacity-70"
        loading="eager"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="absolute inset-0 bg-[#0A0F2B]/50"></div> {/* Overlay for readability alternate #003153*/}
    </div>
  );
}