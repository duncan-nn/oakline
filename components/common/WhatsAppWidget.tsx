'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MessageCircleMore } from 'lucide-react';

type WhatsAppWidgetProps = {
  propertySlug: string;
};

function WhatsAppWidget({propertySlug,}: WhatsAppWidgetProps) {
    const WhatsAppNumber = 15550284893;
    const whatsappMessage = encodeURIComponent(
    `I'm interested in property: ${propertySlug}`
    );
    const whatsappUrl = `https://wa.me/${WhatsAppNumber}?text=${whatsappMessage}`;

    const [scrolled, setScrolled] = useState(false);
    const whatsappRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 200) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <div
    ref={whatsappRef} 
    className={`whatsappchat ${scrolled ? 'show-whatsapp-chat' : 'hide-whatsapp-chat'} `}>
        <a href={whatsappUrl}
        target="_blank" className='whatsappchat-link'>
            <div className='whatsappchat-icon-wrap blink'>
                <MessageCircleMore size={27} className="whatsappchat-icon"/>
            </div>
        </a>
    </div>
  )
}

export default WhatsAppWidget