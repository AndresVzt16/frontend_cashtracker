import React from "react";
import Copy from "./Copy";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockKeyholeFreeIcons } from "@hugeicons/core-free-icons";

const FooterAuth = () => {
  return (
    <footer className="text-gray-400 text-sm mt-2 ">
      <div className="flex gap-2 items-center justify-center  text-gray-400 text-sm mb-5">
        <HugeiconsIcon
          icon={LockKeyholeFreeIcons}
          className="size-5 text-gray-400"
        />
        <p>Tus datos estan seguros</p>
      </div>
      <Copy />
    </footer>
  );
};

export default FooterAuth;
