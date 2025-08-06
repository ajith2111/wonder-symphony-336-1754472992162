import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Register = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
      <h1 className="text-2xl font-bold font-serif mb-6 text-center text-gray-900">Join Couture Luxe</h1>
      <form className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <Input type="text" required placeholder="Full Name" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <Input type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <Input type="password" required placeholder="Create a password" />
        </div>
        <Button className="w-full text-lg py-2">Register</Button>
      </form>
      <div className="mt-4 text-center text-gray-500">
        Already have an account? <Link to="/login" className="underline text-black">Sign In</Link>
      </div>
    </div>
  </div>
);

export default Register;