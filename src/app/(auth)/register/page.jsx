import Image from "next/image";
import Link from "next/link";
import esgLogo from "../_images/esg-logo.png";
import RegisterForm from "./register-form";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(/images/login-bg.svg)] bg-[#11894E]/15 bg-contain">
      <main className="p-12 bg-white rounded-lg pb-8 flex flex-col items-center gap-4 font-light">
        <Image
          src={esgLogo}
          alt="Enugu State Government Logo"
          className="w-24 h-24"
        />
        <h2 className="font-bold text-lg">Welcome to Enugu State Government</h2>
        <h2 className="text-4xl">Fleet Management System</h2>
        <h1 className="text-[#115931] text-2xl font-extrabold self-start">
          Register
        </h1>
        <RegisterForm />
        <p className="register-link font-light mt-auto self-center">
          You don't have an account?
          <Link
            href="/register"
            className="font-bold hover:underline text-primary-bg"
          >
            {" "}
            Register Account
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Register;
