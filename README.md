# DeepWaveBraids — Site E-commerce Custom

Site e-commerce headless pour DeepWaveBraids, construit avec Next.js 15 et connecté à Shopify via la Storefront API.

## Stack technique

- **Frontend** : Next.js 15 (App Router) + TypeScript
- **Style** : Tailwind CSS v4
- **Backend** : Shopify Storefront API (headless)
- **Hébergement** : Vercel (recommandé)
- **Icônes** : Lucide React

## Installation

```bash
npm install
```

## Configuration

1. Va dans Shopify Admin > Settings > Apps and sales channels > Develop apps
2. Crée une nouvelle app
3. Active les Storefront API scopes nécessaires
4. Copie le Storefront access token
5. Remplis `.env.local` :

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=ta-boutique.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=ton_token
```

## Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Déploiement

```bash
npm run build
```

Déployable en un clic sur [Vercel](https://vercel.com).
