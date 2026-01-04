'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface LinkedInPost {
  id: string;
  text: string;
  publishedAt: number;
  url: string;
  hasMedia: boolean;
  mediaType: string | null;
}

interface LinkedInData {
  lastUpdated: string | null;
  organizationId: string | null;
  posts: LinkedInPost[];
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/linkedin-posts.json')
      .then((res) => res.json())
      .then((data: LinkedInData) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading LinkedIn posts:', err);
        setLoading(false);
      });
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Si no hay posts, no mostrar la sección
  if (!loading && posts.length === 0) {
    return null;
  }

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: "#ADADAD" }}>
            PROYECTOS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ backgroundColor: '#FFE045' }}
            className="h-2 mx-auto mb-6"
          />
          <p className="text-navy/70 max-w-2xl mx-auto">
            Destacados de nuestros trabajos más recientes
          </p>
        </motion.div>

        {/* Grid de posts */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 4).map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Icono de LinkedIn */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Pablo Barello y Asoc.</p>
                    <p className="text-xs text-navy/50">{formatDate(post.publishedAt)}</p>
                  </div>
                </div>

                {/* Texto del post */}
                <p className="text-navy/80 text-sm leading-relaxed flex-grow">
                  {truncateText(post.text)}
                </p>

                {/* Media indicator */}
                {post.hasMedia && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-navy/50">
                    {post.mediaType === 'video' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Video</span>
                      </>
                    )}
                    {post.mediaType === 'image' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Imagen</span>
                      </>
                    )}
                    {post.mediaType === 'document' && (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Documento</span>
                      </>
                    )}
                  </div>
                )}

                {/* Ver más */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-cyan text-sm font-medium group-hover:text-navy transition-colors">
                    Ver en LinkedIn →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Enlace a página de LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/company/pablo-barello-asoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan hover:text-navy transition-colors font-medium"
          >
            Ver todos los proyectos en LinkedIn
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
