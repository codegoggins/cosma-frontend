import { Outlet } from "react-router-dom";
import auth1 from "../../assets/images/auth/auth_1.jpg";
import auth2 from "../../assets/images/auth/auth_2.jpg";
import auth3 from "../../assets/images/auth/auth_3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [auth1, auth2, auth3];

const AuthLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="hidden md:flex md:flex-1 w-full h-full p-6">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover"
              alt={`Slide ${currentIndex + 1}`}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/30 z-10" />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 z-20">
            <div className="flex gap-2">
              {images.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="h-1 rounded-full bg-white"
                  initial={false}
                  animate={{
                    width: idx === currentIndex ? 40 : 20,
                    opacity: idx === currentIndex ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full p-6">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
