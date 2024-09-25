import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="max-w-[1200] w-full mx-auto h-[80] flex items-center justify-between p-5 border-gray-300 ">
      <div>
        <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
       
    </div>
    <div className="flex items-center gap-4">
      <Link href="/signInAndUp">
        <Button variant="outline"><User className='w-4' /> Sign In</Button>
      </Link>
      </div>
    </nav>
  )
}

export default Nav