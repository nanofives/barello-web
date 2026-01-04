'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Pan American Energy',
    url: 'https://www.pan-energy.com',
    logo: '/bd67c5_0e4decaa26384878ab34d9022f2df6f1~mv2.png',
    width: 230,
    height: 127,
  },
  {
    name: 'Shell',
    url: 'https://www.shell.com.ar',
    logo: '/bd67c5_20534d9f7c6f4faabc0b558625b8f710~mv2.png',
    width: 196,
    height: 98,
  },
  {
    name: 'Vitco',
    url: 'https://vitco.com.ar',
    logo: '/bd67c5_237f7c901c894ac2a34906b215d735aa~mv2.png',
    width: 173,
    height: 86,
  },
  {
    name: 'YPF',
    url: 'https://www.ypf.com',
    logo: '/bd67c5_f910fd98cf434f0ea430839f31b7bc38~mv2.png',
    width: 173,
    height: 86,
  },
  {
    name: 'Contreras',
    url: 'https://www.contreras.com.ar',
    logo: '/bd67c5_61f16043922949169a1a278d239144a9~mv2.png',
    width: 207,
    height: 109,
  },
];

const tripleClients = [...clients, ...clients, ...clients];
const ITEM_WIDTH_PERCENT = 100 / tripleClients.length;

function ClientCard({
  client,
}: {
  client: typeof clients[0];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-shrink-0 flex items-center justify-center group cursor-pointer transition-all"
    >
      <div className="h-24 flex items-center justify-center px-4">
        <div className={`transition-all duration-300 ${isHovered ? 'saturate-100' : 'saturate-0'}`}>
          <Image
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={client.height}
            className="object-contain h-auto w-auto"
          />
        </div>
      </div>
    </a>
  );
}

export default function Clients() {
  const titleRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const dragTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for title animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { margin: '-100px' }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 0.1;
          if (next >= clients.length * 2) {
            return clients.length + (next % clients.length);
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  // Apply transform to carousel
  useEffect(() => {
    if (carouselRef.current) {
      const translateX = -(currentSlide * ITEM_WIDTH_PERCENT);
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diff = e.clientX - dragStart;
    const movePercent = (diff / (carouselRef.current?.offsetWidth || 1)) * 100;
    const itemDelta = movePercent / ITEM_WIDTH_PERCENT;

    if (carouselRef.current) {
      const newTranslate = -(currentSlide * ITEM_WIDTH_PERCENT) + movePercent;
      carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = e.clientX - dragStart;
    const movePercent = (diff / (carouselRef.current?.offsetWidth || 1)) * 100;
    const itemDelta = Math.round(movePercent / ITEM_WIDTH_PERCENT);

    const newSlide = (currentSlide - itemDelta) % (clients.length * 3);
    setCurrentSlide(newSlide < 0 ? newSlide + (clients.length * 3) : newSlide);

    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
    }
    dragTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section
      id="clientes"
      className="py-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: "#ADADAD" }}>
            CLIENTES
          </h2>
          <div
            ref={underlineRef}
            className={`h-2 mx-auto transition-all duration-700 ${
              isInView ? 'w-24' : 'w-0'
            }`}
            style={{ backgroundColor: '#FFE045' }}
          />
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !isDragging && setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            if (isDragging) {
              handleMouseUp({ clientX: dragStart + 0 } as React.MouseEvent);
            }
          }}
        >
          <div
            ref={carouselRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing transition-transform"
            style={{
              transitionDuration: isDragging ? '0ms' : '50ms',
              transitionTimingFunction: 'linear',
            }}
          >
            {tripleClients.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @supports not (transition-duration: 50ms) {
          [ref="carouselRef"] {
            transition: transform 50ms linear;
          }
        }
      `}</style>
    </section>
  );
}
