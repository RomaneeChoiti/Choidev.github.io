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

function SEO({ title, description, image, keywords, authors, techs, datePublished, url }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    setMeta('og:title', title || document.title, 'meta[property="og:title"]');
    if (description) setMeta('og:description', description, 'meta[property="og:description"]');
    if (image) setMeta('og:image', image, 'meta[property="og:image"]');

    setMeta('twitter:title', title || document.title, 'meta[name="twitter:title"]');
    if (description) setMeta('twitter:description', description, 'meta[name="twitter:description"]');
    if (image) setMeta('twitter:image', image, 'meta[name="twitter:image"]');

    // JSON-LD
    let jsonld = document.getElementById('project-jsonld');
    if (!jsonld) {
      jsonld = document.createElement('script');
      jsonld.type = 'application/ld+json';
      jsonld.id = 'project-jsonld';
      document.head.appendChild(jsonld);
    }

    const jsonldObj = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: title,
      description: description,
      url: url || window.location.href,
      image: image || undefined,
      keywords: keywords || undefined,
      author: authors && authors.length ? authors.map(a => ({ '@type': 'Person', name: a })) : undefined,
      about: techs && techs.length ? techs : undefined,
      datePublished: datePublished || undefined,
    };
    jsonld.text = JSON.stringify(jsonldObj);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, image, keywords, authors, techs, datePublished, url]);

  return null;
}

export default SEO;
