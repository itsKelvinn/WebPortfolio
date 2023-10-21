import React from 'react'

export default function Banner() {
    
    const imagepath = process.env.PUBLIC_URL + "/logos/";
  
    return (
    <div className='w-full flex gap-16 justify-center bg-secondary p-4'>
        <img src={imagepath + "java_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "laravel_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "js_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "mongodb_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "mysql_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "next_logo.png"} alt="java"className="w-16 h-auto object-contain"/>
        <img src={imagepath + "php_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "react_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
        <img src={imagepath + "tailwind_logo.png"} alt="java" className="w-16 h-auto object-contain"/>
    </div>
  )
}
