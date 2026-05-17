Déploiement sur Vercel
======================

Étapes rapides pour connecter ce dépôt à Vercel (GitHub/GitLab/Bitbucket):

1. Push du dépôt sur GitHub (déjà poussé sur `origin/main`).
2. Allez sur https://vercel.com, connectez votre compte et cliquez sur "New Project".
3. Choisissez votre repository et importez-le.
4. Vercel devrait détecter le projet. Si besoin, utilisez ces réglages :
   - Framework Preset: Other / Static
   - Build Command: `npm run build`
   - Output Directory: `out`
5. Le projet contient un `vercel.json` configuré pour utiliser `@vercel/static-build` et servir le contenu de `out/`.

Notes:
- Le script `build` du `package.json` a été mis à jour pour exécuter `next build && next export` afin de générer la version statique dans `out/`.
- Si vous préférez que Vercel utilise le rendu Next.js standard (SSR/SSG), restaurez le script `build` à `next build` et retirez `next export`.
- Pas besoin de variables d'environnement pour un site statique; ajoutez-en si vous utilisez des APIs privées.

Après import, Vercel lancera automatiquement un déploiement à chaque push sur `main`.
