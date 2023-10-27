"use client";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import dynamic from "next/dynamic";
import Btn from "../Btns/Btn";

const PremiumMsg = dynamic(() => import("./PremiumMessage"));

function BasicPremiumMessage() {
  const [info, setInfo] = useState(false);
  return (
    <div>
      <Btn
        props={{
          title: "Premium photos info",
          text: "",
          value: !info,
          funCall: setInfo,
        }}
      >
        <FaInfoCircle />
      </Btn>

      <div
        className={`fixed left-[-100%] top-0 z-50 h-screen w-full overflow-y-auto bg-white/50 p-2 opacity-0 backdrop-blur-sm dark:bg-black/50 sm:p-5 ${
          info && "!left-0 opacity-100 "
        }`}
      >
        <div className="relative rounded-lg bg-lighter py-10 dark:bg-darker">
          <Btn
            props={{
              title: "Close",
              text: "",
              style: "absolute right-2 top-2 !h-fit",
              value: !info,
              funCall: setInfo,
            }}
          >
            <IoMdClose />
          </Btn>
          {info ? <PremiumMsg redirectUrl={""} /> : null}
        </div>
      </div>
    </div>
  );
}

export default BasicPremiumMessage;
