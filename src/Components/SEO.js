import { useEffect } from 'react';

function setMeta(name, content, selector) {
  const sel = selector || `meta[name="${name}"]`;
  let el = document.querySelector(sel);
  const isProperty = sel.includes('property=') || sel.includes('meta[property');
  if (!el) {
    el = document.createElement('meta');
    const attr = isProperty ? 'property' : 'name';
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
}

function setLinkRel(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function SEO({ title, description, image, keywords, authors, techs, datePublished, url }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    if (authors) setMeta('author', Array.isArray(authors) ? authors.join(', ') : authors);

    setMeta('og:title', title || document.title, 'meta[property="og:title"]');
    if (description) setMeta('og:description', description, 'meta[property="og:description"]');
    if (image) setMeta('og:image', image, 'meta[property="og:image"]');
    setMeta('og:type', authors && authors.length === 1 ? 'profile' : 'website', 'meta[property="og:type"]');
    setMeta('og:locale', 'ko_KR', 'meta[property="og:locale"]');

    setMeta('twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('twitter:title', title || document.title, 'meta[name="twitter:title"]');
    if (description) setMeta('twitter:description', description, 'meta[name="twitter:description"]');
    if (image) setMeta('twitter:image', image, 'meta[name="twitter:image"]');

    // Robots
    setMeta('robots', 'index,follow');

    // Canonical
    const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : undefined);
    if (canonicalUrl) setLinkRel('canonical', canonicalUrl);

    // JSON-LD: include CreativeWork and Person when available
    let jsonld = document.getElementById('project-jsonld');
    if (!jsonld) {
      jsonld = document.createElement('script');
      jsonld.type = 'application/ld+json';
      jsonld.id = 'project-jsonld';
      document.head.appendChild(jsonld);
    }

    const creativeWork = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: title,
      description: description,
      url: canonicalUrl,
      image: image || undefined,
      keywords: keywords || undefined,
      about: techs && techs.length ? techs : undefined,
      datePublished: datePublished || undefined,
    };

    const graph = [creativeWork];

    if (authors && authors.length) {
      // If single author, prefer Person schema; for multiple, include each as Person
      const persons = authors.map((a) => ({
        '@type': 'Person',
        name: a,
        sameAs: undefined,
        jobTitle: '작가',
      }));

      // Attach author references to creativeWork
      creativeWork.author = persons.map((p) => ({ '@type': 'Person', name: p.name }));

      // Add detailed Person objects to the graph for stronger signals
      persons.forEach((p) => graph.push({ '@context': 'https://schema.org', ...p }));
    }

    // Include WebSite schema for site-level signals
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: (authors && authors.length === 1) ? `${authors[0]} — STUDIO CHOI` : 'STUDIO CHOI',
      url: (typeof window !== 'undefined' && window.location.origin) ? window.location.origin : canonicalUrl,
    };
    graph.push(website);

    jsonld.text = JSON.stringify(graph.length === 1 ? graph[0] : { '@graph': graph }, null, 2);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, image, keywords, authors, techs, datePublished, url]);

  return null;
}

export default SEO;
