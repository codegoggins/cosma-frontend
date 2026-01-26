import { Button, Checkbox, Select } from "antd";
import { CustomInput } from "../../components/ui/CustomInput";
import { Link } from "react-router-dom";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdAlternateEmail, MdOutlineStorefront } from "react-icons/md";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsGlobe2 } from "react-icons/bs";
import { LuLock } from "react-icons/lu";
import { countryOptions } from "../../data/Options";

const VendorRegister = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="w-full h-full flex flex-col items-center max-w-130 justify-center">
        <div className="flex flex-col space-y-2 text-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Become a Vendor
          </h1>
          <p className="text-sm text-muted-foreground">
            Start selling your products to millions of customers
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Full Name"
              placeholder="John Doe"
              icon={<FiUser className="w-4 h-4" />}
            />
            <CustomInput
              label="Business Email"
              placeholder="business@example.com"
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
                options={countryOptions}
                suffixIcon={
                  <BsGlobe2 className="w-4 h-4 text-muted-foreground" />
                }
              />
            </div>
            <CustomInput
              label="Business Name"
              placeholder="My Awesome Store"
              icon={<MdOutlineStorefront className="w-4 h-4" />}
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none">
                Business Type
              </label>
              <Select
                className="w-full h-10"
                placeholder="Select Type"
                options={[
                  { value: "retail", label: "Retailer" },
                  { value: "wholesale", label: "Wholesaler" },
                  { value: "manufacturer", label: "Manufacturer" },
                ]}
                suffixIcon={
                  <HiOutlineBuildingLibrary className="w-4 h-4 text-muted-foreground" />
                }
              />
            </div>

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
              className="text-sm text-muted-foreground leading-none mt-0.75"
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
            className="w-full bg-primary hover:bg-primary/90 h-10"
          >
            Register Business
          </Button>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have a vendor account?{" "}
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

export default VendorRegister;
