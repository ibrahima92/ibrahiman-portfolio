import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/blog/hello-world'>
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href='/blog/hello-world'>
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href='/blog/hello-world'>
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href='/blog/hello-world'>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  )
}
