import React from "react";
import Link from "next/link";
import { type } from "os";

export type NavigationItemProps = {
  link: string;
  text: string;
  textColor: string;
  onClick?: React.MouseEventHandler;
};

export default function NavigationItem({
  link,
  text,
  textColor,
  onClick,
}: NavigationItemProps) {
  return (
    <li
      onClick={onClick}
      style={{ color: `${textColor}` }}
      className="list-none p-4 text-4xl sm:text-xl hover:text-gray-500 ">
      <Link href={link}>{text}</Link>
    </li>
  );
}
