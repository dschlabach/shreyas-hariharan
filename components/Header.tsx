import React from "react";
import Link from "next/link";
import Input from "components/Input";
import Button from "components/Button";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">
        <Link href="/">Shreyas Hariharan</Link>
      </h1>
      <div>
        <Input className="h-full" />
        <Button className="h-full -ml-4">Subscribe</Button>
      </div>
    </div>
  );
};

export default Header;
