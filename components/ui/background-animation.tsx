// import MotionWrapper from "./motion/MotionWrapper";
import * as motion from "motion/react-client";

const BackgroundAnimation = () => {
  // Create array of shapes with different properties
  const shapes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
    color: [
      "bg-primary",
      "bg-chart-2",
      "bg-pink-400",
      "bg-indigo-400",
      "bg-cyan-400",
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} opacity-10 blur-xl`}
          initial={{
            x: `${shape.x}vw`,
            y: `${shape.y}vh`,
            scale: 0.8,
          }}
          animate={{
            x: [`${shape.x}vw`, `${(shape.x + 20) % 100}vw`, `${shape.x}vw`],
            y: [`${shape.y}vh`, `${(shape.y + 20) % 100}vh`, `${shape.y}vh`],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
          style={{
            width: `${shape.size}vw`,
            height: `${shape.size}vw`,
            opacity: shape.opacity,
          }}
        />
      ))}

      {/* Gradient overlay - fixed the radial gradient issue */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent backdrop-blur-[2px]" />
    </div>
  );
};

export default BackgroundAnimation;
