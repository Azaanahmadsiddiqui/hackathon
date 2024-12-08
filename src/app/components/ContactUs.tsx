import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const montserrat = Montserrat ({
    subsets:['latin'],
    weight:['400','700'],
});

const ContactUs = () => {
  return (
    <div className={montserrat.className}>
        <div>
            <Image src={'/images/background.png'} width={1400} height={100} alt='backgroundOfContact'></Image>
        </div>
        <div>
            <Image src={'/images/desktop-contact.png'} width={1400} height={100} alt='desktop-contact'></Image>
        </div>
        <div>
            <Image src={'/images/desktop-cta.png'} width={1400} height={100} alt='desktop-cta'></Image>
        </div>
    </div>
  )
}

export default ContactUs