import Image from "next/image";
import wallet from "./assets/wallet.png";
import bg from "./assets/bg.webp";

const WalletPage = () => {
  return (
    <div className="w-full flex justify-between pt-14">
      <div className="w-1/4">
        <div className="p-2">
          <div className="mx-auto">
            <div className="bg-white p-3 rounded-3xl border">
              <Image src={wallet} alt="wallet" height={300} />
              <button className="py-3  justify-center w-full hover:bg-[#363e4f] mt-2 bg-black text-white rounded-3xl mb-6">
                Add An Account
              </button>
            </div>
            <div className="p-6 rounded-3xl border mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-md text-gray-600 font-medium">
                  Payout Accounts
                </h2>
                <i className="fas fa-info-circle text-gray-400"></i>
              </div>
              <div className="flex items-center justify-between p-4 border-dashed border-2 border-[#6770844d] rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-2 border hover:bg-yellow-500 rounded-full border-yellow-400">
                    <svg
                      xmlnXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      focusable="false"
                      height="24"
                      role="img"
                      stroke-width="1"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M11.25 3V11.25H3V12.75H11.25V21H12.75V12.75H21V11.25H12.75V3H11.25Z"
                        fill="#14171F"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Add An Account</h3>
                    <p className="text-sm text-gray-700">
                      Enable commission-free payments and projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-center">
        <div className="max-w-md text-center">
        <Image src={bg} alt="bg" className="object-cover"/>
        <h2 className="text-2xl font-semibold">
        You&apos;re on your way to getting paid!
        </h2>
        <h3 className="text-lg my-5">
        You currently don&apos;t have any transactions. Once you start working on paid projects, all of your transactions will appear here.
        </h3>
        <button className="font-semibold hover:border-b-2 border-yellow-400">
            Need some help?
        </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
