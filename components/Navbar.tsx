import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-white align-center px-5 py-4'>
      <h1 className='font-bold'>Ibrahima Ndaw</h1>
      <ul className='flex justify-center align-center'>
        <li className='mr-3'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className='mr-3'>
          <Link href='#about'>
            <a>About</a>
          </Link>
        </li>
        <li className='mr-3'>
          <Link href='#projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li className='mr-3'>
          <Link href='#services'>
            <a>Services</a>
          </Link>
        </li>
        <li className='mr-3'>
          <Link href='https://www.ibrahima-ndaw.com/'>
            <a>Blog</a>
          </Link>
        </li>
        <li className='mr-3'>
          <Link href='#contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
