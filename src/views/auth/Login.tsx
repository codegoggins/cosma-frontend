import { CustomInput } from "../../components/ui/CustomInput";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "antd";
import { LuLock } from "react-icons/lu";
import { Link } from "react-router-dom";
import google_logo from "../../assets/logo/google_auth.svg";

const Login = () => {
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
        <div className="grid gap-6 w-full">
          <div className="grid gap-4">
            <CustomInput
              label="Email"
              placeholder="name@example.com"
              type="email"
              icon={<MdAlternateEmail className="w-4 h-4" />}
            />
            <CustomInput
              label="Password"
              placeholder="Password"
              isPassword
              icon={<LuLock className="w-4 h-4" />}
            />

            <Button
              type="primary"
              size="large"
              className="w-full bg-primary hover:bg-primary/90 h-10 mt-2"
            >
              Sign In
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
            Sign in with Google
          </Button>
          <div className="space-y-4 text-center">
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign Up
              </Link>
            </p>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Want to sell on our platform?{" "}
                <Link
                  to="/vendor/register"
                  className="font-medium text-primary hover:underline"
                >
                  Become a Vendor
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
