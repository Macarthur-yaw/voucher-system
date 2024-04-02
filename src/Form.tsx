import React, { useState } from "react";
import axios from 'axios';
import { FaCheck } from 'react-icons/fa'; // Import the check icon

type FormValues = {
  voucherCode?: string;
  number?: string;
};

export default function Form() {
  const [loading, setLoading] = useState<boolean>(false); // State for loading spinner
  const [done, setDone] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    voucherCode: "",
    number: ""
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValues);
    setLoading(true);
    setDone(true); 
    const url = "https://send-sms-oap4.onrender.com/api/send-sms";
    try {
      await axios.post(url, formValues);
      setLoading(false);
      setDone(true);
      setFormValues({
        voucherCode:'',
        number:''
      })
      console.log("done");
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  }

  return (
    <div className="border-[1px] shadow-md border-slate-200 md:w-1/4  mx-auto bg-white ">
      <form onSubmit={handleSubmit} className="flex p-6 flex-col">
        <span className="text-sm mb-2 font-semibold -tracking-widest">
          Voucher code
        </span>
        <input
          type="text"
          value={formValues.voucherCode}
          onChange={(e) =>
            setFormValues({ ...formValues, voucherCode: e.target.value })
          }
          placeholder="Eg. 36578"
          required
          className="text-sm border-[1px] outline-none p-2 rounded"
        />
        <br />
        <span className="text-sm mb-2 font-semibold -tracking-widest">
          Phone Number
        </span>
        <input
          type="text"
          value={formValues.number}
          onChange={(e) =>
            setFormValues({ ...formValues, number: e.target.value })
          }
          placeholder="Eg. 233599293572"
          className="text-sm border-[1px] p-2 outline-none rounded"
        />
        <div className="mt-10">
          <button className="bg-[#f8f9fb] w-full text-sm font-semibold p-1" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <div
        className={`${done ? "bg-black bg-opacity-10 w-full h-screen top-0 fixed left-0" : ""}`}
        onClick={() => setDone(false)}
      ></div>
  <div className="relative">
      {done && (
        <div className="absolute border-[1px] w-full shadow-md bg-white rounded-sm top-1/2 -transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-8 flex items-center text-sm">
          <FaCheck className="text-green-500 mr-2" /> A message has been sent to your phone.
      
          Might take a while to show.
        </div>
      )}</div>
    </div>
  );
}
