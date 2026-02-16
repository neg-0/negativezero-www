export function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Horizontal Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      ></div>
      {/* Vertical Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      ></div>
      {/* Subtle Noise for texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
    </div>
  );
}
