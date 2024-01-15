import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen justify-center flex items-center text-white text-2xl bg-black">
      For steps 1 and 2{" "}
      <Link href="/steps" className="text-pink-600 mx-2">
        click here
      </Link>
      | For starting pages
      <Link href="/cards" className="text-pink-600 mx-2">
        click here
      </Link>
      | For home and Settings
      <Link href="/home" className="text-pink-600 mx-2">
        click here
      </Link>
      | For OTP
      <Link href="/otp" className="text-pink-600 mx-2">
        click here
      </Link>
    </main>
  );
}
