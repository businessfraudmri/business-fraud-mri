# Business Fraud MRI™ Website - Setup & Deployment Guide

## Quick Start

### Local Development
```bash
npm install
npm run dev
```
Open http://localhost:5173 in your browser.

### Build for Production
```bash
npm run build
```
Output: `/dist` folder ready for deployment

## All Pages & Routes

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, stats, services, insights |
| About | `/about` | Mission, expertise, values, team |
| Services | `/services` | Service listings, approach |
| Frameworks | `/frameworks` | 5-layer framework with image |
| Insights | `/insights` | Blog articles, newsletter signup |
| Resources | `/resources` | Downloads, tools, webinars |
| Contact | `/contact` | Form, contact info, socials |
| 404 | `/*` | Error page with navigation |

## Contact Details Configured

### Direct Contact
- **Email:** info@businessfraudmri.com
- **Phone:** +251 799 103 334 (clickable tel: links)

### Social Media (All Working URLs)
1. **LinkedIn:** https://linkedin.com/company/businessfraudmri
2. **X/Twitter:** https://twitter.com/BusinesFraudMRI
3. **YouTube:** https://youtube.com/@BusinessFraudMRI
4. **Telegram:** https://t.me/businessfraudmri
5. **Facebook:** https://facebook.com/businessfraudmri
6. **TikTok:** https://tiktok.com/@businessfraudmri

## Contact Form Features

✅ **Functional Elements:**
- Full name input
- Email validation
- Company field
- Phone number field
- Subject dropdown (5 options)
- Message textarea
- Submit button with loading state

✅ **User Feedback:**
- Success message on submission
- Auto-dismiss after 5 seconds
- Form clears after submission
- Loading indicator during processing
- All fields required validation

## Navigation Features

✅ **Main Navigation:**
- Home, About, Services, Frameworks, Insights, Resources, Tools, Contact
- Active page highlighting
- Mobile responsive hamburger menu
- Smooth transitions

✅ **Footer Navigation:**
- Same links as main nav
- Social media icons (all 6 platforms)
- Copyright notice

## Design Details

✅ **Color Scheme:**
- Primary: Dark Navy (#0a1628)
- Accent: Red (#DC2626)
- Secondary: Light Gray backgrounds
- Text: Dark gray/white for contrast

✅ **Responsive Design:**
- Mobile-first approach
- Tablet optimized
- Desktop enhanced
- All breakpoints tested

## Deployment Steps

### To Cloudflare Pages via GitHub

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Add all features"
   git push origin main
   ```

2. **Connect to Cloudflare:**
   - Go to https://pages.cloudflare.com
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your repository

3. **Configure build settings:**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy:**
   - Click "Save and Deploy"
   - Your site goes live at `yourproject.pages.dev`

### Direct Upload (No Git Required)

1. Run: `npm run build`
2. Go to https://pages.cloudflare.com
3. Click "Create a project" → "Upload assets"
4. Drag and drop the `/dist` folder
5. Deploy instantly

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation with routing
│   ├── Footer.tsx      # Footer with socials
│   ├── Hero.tsx        # Home hero section
│   ├── StatsBar.tsx    # Statistics display
│   ├── MainContent.tsx # Services & insights
│   └── BottomSections.tsx # Resources & contact info
├── pages/              # Full pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Frameworks.tsx
│   ├── Insights.tsx
│   ├── Resources.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── layouts/
│   └── Layout.tsx      # Page layout wrapper
├── utils/
│   └── seo.ts         # SEO metadata helper
├── App.tsx            # React Router setup
└── main.tsx           # Entry point
```

## Key Technologies

- **Framework:** React 18
- **Routing:** React Router v7
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript

## Verification Checklist

Before deployment, verify:

- [ ] All pages load without errors
- [ ] Navigation highlights current page
- [ ] Contact form submits and shows success message
- [ ] All social media links open in new tabs
- [ ] Mobile menu toggles correctly
- [ ] Background images display
- [ ] All CTAs point to correct pages
- [ ] Phone number is clickable
- [ ] Email is clickable
- [ ] Build completes: `npm run build`

## Support

For issues or questions:
1. Check the page SEO settings in `/src/utils/seo.ts`
2. Review component structure in `/src/components`
3. Check page routes in `/src/App.tsx`
4. Verify contact info in `/src/pages/Contact.tsx`

---

**Status:** ✅ Production Ready
**Build Size:** 250.32 kB (73.29 kB gzipped)
**Last Updated:** 2024
