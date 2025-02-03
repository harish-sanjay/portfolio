import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";

const SocialLinks = () => {
  const iconClassName = 'text-xl text-[var(--title-color)] hover:text-[var(--title-color-dark)]';
  return (
    <div className='grid grid-cols-1 gap-y-5'>
      <a href='/linkedin'>
        <FaLinkedinIn className={iconClassName} />
      </a>
      <a>
        <FiGithub className={iconClassName}  />
      </a>
      <a>
        <FaUserSecret className={iconClassName} />
      </a>
    </div>
  )
}

export default SocialLinks
