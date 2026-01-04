/**
 * Script para obtener posts de LinkedIn usando la API oficial
 * Se ejecuta via GitHub Actions o manualmente
 *
 * Uso: node scripts/fetch-linkedin-posts.js
 *
 * Variables de entorno requeridas:
 * - LINKEDIN_ACCESS_TOKEN: Token de acceso OAuth
 * - LINKEDIN_ORGANIZATION_ID: ID numérico de la organización
 */

const fs = require('fs');
const path = require('path');

const LINKEDIN_API_BASE = 'https://api.linkedin.com/rest';
const POSTS_COUNT = 4; // Número de posts a obtener

async function fetchLinkedInPosts() {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const organizationId = process.env.LINKEDIN_ORGANIZATION_ID;

  if (!accessToken) {
    console.error('Error: LINKEDIN_ACCESS_TOKEN no está configurado');
    process.exit(1);
  }

  if (!organizationId) {
    console.error('Error: LINKEDIN_ORGANIZATION_ID no está configurado');
    process.exit(1);
  }

  const organizationUrn = `urn:li:organization:${organizationId}`;
  const encodedUrn = encodeURIComponent(organizationUrn);

  console.log(`Obteniendo posts de organización: ${organizationId}`);

  try {
    // Obtener posts de la organización
    const response = await fetch(
      `${LINKEDIN_API_BASE}/posts?author=${encodedUrn}&q=author&count=${POSTS_COUNT}&sortBy=LAST_MODIFIED`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Restli-Protocol-Version': '2.0.0',
          'LinkedIn-Version': '202411',
          'X-RestLi-Method': 'FINDER',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`LinkedIn API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (!data.elements || data.elements.length === 0) {
      console.log('No se encontraron posts');
      return [];
    }

    console.log(`Se encontraron ${data.elements.length} posts`);

    // Procesar posts para extraer información relevante
    const posts = data.elements.map((post, index) => ({
      id: post.id,
      text: post.commentary || '',
      publishedAt: post.publishedAt,
      url: `https://www.linkedin.com/feed/update/${post.id}`,
      hasMedia: !!post.content?.media,
      mediaType: post.content?.media ? getMediaType(post.content.media) : null,
    }));

    // Guardar en archivo JSON
    const outputPath = path.join(__dirname, '..', 'public', 'linkedin-posts.json');
    const outputData = {
      lastUpdated: new Date().toISOString(),
      organizationId,
      posts,
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`Posts guardados en: ${outputPath}`);

    return posts;

  } catch (error) {
    console.error('Error al obtener posts:', error.message);
    process.exit(1);
  }
}

function getMediaType(media) {
  if (media.id?.includes('video')) return 'video';
  if (media.id?.includes('image')) return 'image';
  if (media.id?.includes('document')) return 'document';
  return 'unknown';
}

// Ejecutar
fetchLinkedInPosts();
