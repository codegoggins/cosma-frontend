import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen bg-red-200">
      <div className="w-full h-full flex-1">Left Section</div>
      <div className="w-full h-full flex-1">
        <h1>Right Section</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
