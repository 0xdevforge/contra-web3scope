"use client";
import React from "react";
import edit from "/public/admin/edit.svg";
import Image from "next/image";
import Domain from "../../../../components/admin/Domain";
import Subscription from "../../../../components/admin/Subscription";
import Work from "../../../../components/admin/Work";
import Upper from "../../../../components/admin/Upper";
import account from "/public/accounts.svg"
import sub from "/public/sub.svg"
import work from "/public/work.svg"
function Settings({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl ">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      {children}
    </div>
  );
}

function Tab() {
  const [activeTab, setActiveTab] = React.useState("account");
  const [email, setEmail] = React.useState("daxaw69560@wenkuu.com");
  const [emailEdit, setEmailEdit] = React.useState(email);
  const [birthdate, setBirthdate] = React.useState("01/12/2024");
  const [birthdateEdit, setBirthdateEdit] = React.useState(birthdate);
  const [calendarLink, setCalendarLink] = React.useState("");
  const [calendarLinkEdit, setCalendarLinkEdit] = React.useState(calendarLink);
  const [editingEmail, setEditingEmail] = React.useState(false);
  const [editingBirthdate, setEditingBirthdate] = React.useState(false);
  const [editingCalendarLink, setEditingCalendarLink] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isBirthdateValid, setIsBirthdateValid] = React.useState(true);
  const [isCalendarLinkValid, setIsCalendarLinkValid] = React.useState(true);

  const handleEmailEditChange = (e) => {
    setEmailEdit(e.target.value);
    setIsEmailValid(e.target.value.includes("@")); // Simple email validation
  };

  const handleBirthdateEditChange = (e) => {
    setBirthdateEdit(e.target.value);
    setIsBirthdateValid(e.target.value !== ""); // Check if the date is not empty
  };

  const handleCalendarLinkEditChange = (e) => {
    setCalendarLinkEdit(e.target.value);
    setIsCalendarLinkValid(e.target.value !== ""); // Check if the link is not empty
  };

  const saveEmailEdit = () => {
    setEmail(emailEdit);
    setEditingEmail(false);
  };

  const cancelEmailEdit = () => {
    setEmailEdit(email);
    setEditingEmail(false);
  };

  const saveBirthdateEdit = () => {
    setBirthdate(birthdateEdit);
    setEditingBirthdate(false);
  };

  const cancelBirthdateEdit = () => {
    setBirthdateEdit(birthdate);
    setEditingBirthdate(false);
  };

  const saveCalendarLinkEdit = () => {
    setCalendarLink(calendarLinkEdit);
    setEditingCalendarLink(false);
  };

  const cancelCalendarLinkEdit = () => {
    setCalendarLinkEdit(calendarLink);
    setEditingCalendarLink(false);
  };

  return (
    <div className="flex justify-center   ">
      <div className="flex flex-col w-80 p-4 ">
        <button
          onClick={() => setActiveTab("account")}
          className={`mb-2 text-left ${
            activeTab === "account" ? " bg-[#eae7ff] flex gap-2" : "flex gap-2 hover:bg-[#eae7ff]"
          } rounded-lg text-black px-4 py-2`}
        >
          <Image src={account} alt=""/>
          Account
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`mb-2 text-left ${
            activeTab === "subscription" ? " bg-[#eae7ff] flex gap-2" : "flex gap-2 hover:bg-[#eae7ff]"
          } rounded-lg text-black px-4 py-2`}
        >
          <Image src={sub} alt=""/>
          Subscriptions
        </button>
        <button
          onClick={() => setActiveTab("preferences")}
          className={`mb-2 text-left ${
            activeTab === "preferences" ? " bg-[#eae7ff] flex gap-2" : "flex gap-2 hover:bg-[#eae7ff]"
          } rounded-lg text-black px-4 py-2`}
        >
          <Image src={work} alt=""/>
          Work Preferences
        </button>
        {/* Add other tabs as needed */}
      </div>
      <div className="flex p-4">
        <div className="w-[630px] border rounded-2xl ">
          {activeTab === "account" && (
            <Settings title="Account Information">
              {/* Account information content */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold pl-2">Email</h2>
                {editingEmail ? (
                  <div>
                    <input
                      type="text"
                      value={emailEdit}
                      onChange={handleEmailEditChange}
                      className="border px-4 py-4 mr-2 rounded-lg w-full mt-2"
                    />
                    
                    <div classNameflex gap-2=" justify-end mflex gap-2t-2">
                      <button
                        onClick={cancelEmailEdit}
                        className="text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1 "
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveEmailEdit}
                        disabled={!isEmailValid}
                        className={`text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1  ${
                          !isEmailValid
                            ? "bg-[#f2f4f7] cursor-not-allowed text-gray-600"
                            : ""
                        }`}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between hover:bg-[#f4f4f4] py-3 text-lg  rounded-md cursor-pointer">
                    <p className="text-gray-600 px-2">{email}</p>
                    <button
                      onClick={() => setEditingEmail(true)}
                      className="mr-4 text-gray-600"
                    >
                      <Image src={edit} alt="" />
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold pl-2">Birthdate</h2>
                {editingBirthdate ? (
                  <div>
                    <input
                      type="date"
                      value={birthdateEdit}
                      onChange={handleBirthdateEditChange}
                      className="border px-4 py-4 mr-2 rounded-lg w-full mt-2"
                    />
                    <div className="flex justify-end mt-2 gap-2">
                      <button
                        onClick={cancelBirthdateEdit}
                        className="text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1 "
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveBirthdateEdit}
                        disabled={!isBirthdateValid}
                        className={`text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1  ${
                          !isBirthdateValid
                            ? "bg-[#f2f4f7] cursor-not-allowed text-gray-600"
                            : ""
                        }`}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between hover:bg-[#f4f4f4] py-3 text-lg  rounded-md cursor-pointer">
                    <p className="text-gray-600 px-2">
                      {birthdate || "Select your birthdate"}
                    </p>
                    <button
                      onClick={() => setEditingBirthdate(true)}
                      className="mr-4 text-gray-600"
                    >
                      <Image src={edit} alt="" />
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold pl-2">Calendar Link</h2>
                {editingCalendarLink ? (
                  <div>
                    <input
                      type="text"
                      value={calendarLinkEdit}
                      onChange={handleCalendarLinkEditChange}
                      className="border p-2 mr-2 rounded w-full"
                    />
                    <div className="flex justify-end mt-2 gap-2">
                      <button
                        onClick={cancelCalendarLinkEdit}
                        className="text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1 "
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveCalendarLinkEdit}
                        disabled={!isCalendarLinkValid}
                        className={`text-black border rounded-3xl hover:bg-[#f5f6f9] px-4 py-1  ${
                          !isCalendarLinkValid
                            ? "bg-[#f2f4f7] cursor-not-allowed text-gray-600"
                            : ""
                        }`}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between hover:bg-[#f4f4f4] py-3 text-lg  rounded-md cursor-pointer">
                    <p className="text-gray-600 px-2">
                      {calendarLink || "e.g. Calendly, zcal, Cal.com"}
                    </p>
                    <button
                      onClick={() => setEditingCalendarLink(true)}
                      className="mr-4 text-gray-600"
                    >
                      <Image src={edit} alt="" />
                    </button>
                  </div>
                )}
                <p className="text-gray-500 px-2 text-xs">
                  Share your calendar link to seamlessly set up a call
                </p>
              </div>

              <div className="py-6">
                <hr />
              </div>
              <h2 className="text-2xl font-semibold">Domains</h2>
              <Domain />
              {/* Add other account information fields */}
            </Settings>
          )}
          {activeTab === "subscription" && (
            <Settings title="Subscription Information">
              {/* Subscription information content */}
              <Subscription />
            </Settings>
          )}
          {activeTab === "preferences" && (
            <Settings title="Work Preferences">
              {/* Work preferences content */}
              <Upper />
              <div className="py-6">
                <hr />
              </div>
              <Work />
            </Settings>
          )}
          {/* Add other tab contents as needed */}
        </div>
      </div>
    </div>
  );
}
export default Tab;
