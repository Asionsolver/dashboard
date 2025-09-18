import * as motion from "motion/react-client";
import BackgroundAnimation from "./ui/background-animation";
import { doSocialLogin } from "@/app/action/action";
import GoogleLogo from "../public/google.svg";
import Image from "next/image";
function LoginForm() {
  return (
    <form
      action={doSocialLogin}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
    >
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">
              User<span className="text-blue-500">Plus</span>
            </h1>
          </div>

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 flex items-center justify-center gap-2 text-2xl font-bold">
              <motion.span
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
                className="inline-block"
              >
                😊
              </motion.span>
              Let&apos;s get Started
            </h2>
            <p className="text-gray-600">
              Sign up to the family and get started immediately
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <motion.button
              type="submit"
              name="action"
              value="google"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 font-medium text-black shadow-md transition-colors hover:bg-gray-100"
            >
              <Image
                src={GoogleLogo}
                alt="google-logo"
                width={20}
                height={20}
              />
              Sign up with Google
            </motion.button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already a Member?{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="font-medium text-blue-600 hover:underline"
                href="#"
              >
                SIGN IN
              </motion.a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
