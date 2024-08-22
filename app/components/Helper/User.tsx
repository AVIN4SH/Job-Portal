/* eslint-disable @next/next/no-img-element */
"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import logoutImage from "@/public/images/logout.png";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

interface Props {
  session: Session;
}

const User = ({ session }: Props) => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` });
      }}
      className="cursor-pointer"
    >
      {session.user?.image && (
        <>
          <Image
            data-tooltip-id="signout"
            data-tooltip-content="Sign Out"
            src={logoutImage}
            alt="user"
            className="w-12 h-12 p-2 rounded-full"
          />
          <Tooltip id="signout" />
        </>
      )}
    </div>
  );
};

export default User;
