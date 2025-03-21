import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const handleResetPassword = () => {
        // Add logic to handle password reset
        console.log("Password reset for:", newPassword);
    };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600">Enter your new password to reset old one</p>
        </div>
        <div className="relative w-full">
            <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            className="pl-10"
            />
                <Button onClick={handleResetPassword} className="bg-orange hover:bg-hoverOrange">Reset Password</Button>
        </div>
       
                <Button className="bg-orange hover:bg-hoverOrange">Reset Password</Button>
       
        <span className="text-center">
            Back to{" "}
            <Link to="/login" className="text-blue-500">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default ResetPassword;
