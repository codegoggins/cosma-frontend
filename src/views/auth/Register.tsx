import { FiPhone, FiUser } from "react-icons/fi";
import { CustomInput } from "../../components/ui/CustomInput";
import { MdAlternateEmail } from "react-icons/md";
import { Button, Checkbox, Select } from "antd";
import { BsGlobe2 } from "react-icons/bs";
import { LuLock } from "react-icons/lu";
import { Link } from "react-router-dom";
import google_logo from "../../assets/logo/google_auth.svg";

const Register = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="w-full h-full flex flex-col items-center max-w-130 justify-center">
        <div className="flex flex-col space-y-2 text-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <CustomInput
              label="Full Name"
              placeholder="John Doe"
              icon={<FiUser className="w-4 h-4" />}
            />
            <CustomInput
              label="Email"
              placeholder="name@example.com"
              type="email"
              icon={<MdAlternateEmail className="w-4 h-4" />}
            />
            <CustomInput
              label="Phone"
              placeholder="+1 234 567 890"
              icon={<FiPhone className="w-4 h-4" />}
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none">
                Country
              </label>
              <Select
                className="w-full h-10"
                placeholder="Select Country"
                options={[
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "in", label: "India" },
                  { value: "ca", label: "Canada" },
                ]}
                suffixIcon={
                  <BsGlobe2 className="w-4 h-4 text-muted-foreground" />
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                label="Password"
                placeholder="Password"
                isPassword
                icon={<LuLock className="w-4 h-4" />}
              />
              <CustomInput
                label="Confirm Password"
                placeholder="Confirm"
                isPassword
                icon={<LuLock className="w-4 h-4" />}
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-none mt-0.5"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="primary"
              size="large"
              className="w-full bg-primary hover:bg-primary/90 h-10 mt-2"
            >
              Sign Up
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            size="large"
            className="w-full h-10 flex items-center justify-center gap-2"
          >
            <img src={google_logo} alt="Google Auth Logo" className="w-4 h-4" />
            Sign up with Google
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
