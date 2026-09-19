export default function FloatingGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* green gradient */}
      <div className="floating-gradient-green" />

      {/* orange gradient */}
      <div className="floating-gradient-orange" />

      {/* subtle white glow */}
      <div className="floating-gradient-light" />

    </div>
  );
}