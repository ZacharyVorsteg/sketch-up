# 🚀 Deployment Guide - SketchUp Mastery Course

## Quick Deploy to Netlify

Your SketchUp Mastery Course is now ready to deploy! Follow these simple steps:

---

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**

### Step 2: Select Your Repository

1. Choose **"Deploy with GitHub"**
2. Authorize Netlify if prompted
3. Search for `sketch-up` repository
4. Select it

### Step 3: Configure Build Settings

**Build settings should auto-detect! But verify:**
- **Branch to deploy:** `main`
- **Build command:** (leave empty or use: `echo 'Ready!'`)
- **Publish directory:** `.` (root)

### Step 4: Deploy!

1. Click **"Deploy site"**
2. Wait 30-60 seconds
3. Your site is LIVE! 🎉

### Step 5: Custom Domain (Optional)

1. Click **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `sketchup-mastery.com`)
4. Follow DNS instructions
5. SSL automatically enabled (HTTPS)

---

## Option 2: Drag & Drop Deploy (Fastest)

### Step 1: Prepare Files

All files are already in: `/Users/zachthomas/Desktop/sketch-up-course/`

### Step 2: Deploy

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `sketch-up-course` folder into the browser
3. Wait for upload
4. Site is LIVE instantly!

**Note:** This method requires manual updates. Use GitHub method for automatic updates.

---

## What's Included & Configured

### ✅ Complete Course Content
- 10 comprehensive modules
- 2 major portfolio projects
- Progress tracker
- Keyboard shortcut cheatsheet
- Professional business guidance

### ✅ Beautiful Website
- Modern, responsive design
- Mobile-friendly
- Professional aesthetics
- Easy navigation
- Fast loading

### ✅ Netlify Configuration
- **netlify.toml** - Build configuration
- **_redirects** - Pretty URLs and routing
- **.gitignore** - Clean git tracking
- **Security headers** - XSS protection, HTTPS enforced
- **Caching** - Optimized performance

### ✅ SEO Ready
- Semantic HTML
- Meta descriptions
- Proper heading structure
- Fast page load times

---

## Post-Deployment Checklist

After your site is live:

- [ ] Visit your site and test navigation
- [ ] Click through each module link
- [ ] Test on mobile device
- [ ] Check progress tracker loads
- [ ] Verify all README files display correctly
- [ ] Test keyboard shortcuts cheatsheet
- [ ] Share the link!

---

## Customization Options

### Change Site Name

1. Netlify dashboard → **Site settings**
2. **Change site name**
3. Enter desired name: `your-name-sketchup`
4. URL becomes: `your-name-sketchup.netlify.app`

### Update Content

**If deployed via GitHub:**
1. Edit files locally
2. Commit changes: `git add -A && git commit -m "Update content"`
3. Push: `git push origin main`
4. Netlify automatically rebuilds (30-60 seconds)

**If deployed via drag & drop:**
1. Edit files locally
2. Re-drag entire folder to Netlify
3. Overwrites previous version

---

## Site URLs

After deployment, your site will be accessible at:

**Default Netlify URL:**
```
https://[your-site-name].netlify.app
```

**Main Pages:**
- Home: `/`
- Module 1: `/01-getting-started/README.md`
- Progress Tracker: `/PROGRESS.md`
- Shortcuts: `/01-getting-started/keyboard-shortcuts-cheatsheet.md`

**Pretty URLs** (via redirects):
- `/getting-started` → Module 1
- `/navigation` → Module 2
- `/first-project` → Module 4
- `/going-professional` → Module 10
- `/progress` → Progress tracker
- `/shortcuts` → Shortcuts cheatsheet

---

## Troubleshooting

### Issue: Markdown files show as plain text

**Fix:** Netlify serves .md files as plain text by default. 

**Options:**
1. Convert to HTML (more work)
2. Use markdown viewer browser extension
3. Use GitHub Pages instead (renders markdown natively)

**Recommended:** Keep as-is. The index.html homepage provides navigation, and markdown files are readable in any browser.

---

### Issue: Build fails

**Possible causes:**
- Incorrect build settings
- Missing files

**Fix:**
1. Check build settings: Command should be empty or simple echo
2. Publish directory should be `.` (root)
3. Check build log in Netlify dashboard

---

### Issue: Site not updating

**If GitHub deploy:**
- Check repository pushed: `git push origin main`
- Check Netlify dashboard for build status
- Check deploy logs for errors

**If drag & drop:**
- Clear browser cache
- Re-drag folder

---

## Performance Optimization

Your site is already optimized with:
- ✅ Minified CSS
- ✅ Browser caching headers
- ✅ HTTPS enforced
- ✅ Security headers
- ✅ Responsive images (when added)

### Optional Enhancements:

**Add favicon:**
1. Create `favicon.ico` (16×16 or 32×32)
2. Place in root directory
3. Commit and push

**Add Open Graph tags** (for social sharing):
```html
<meta property="og:title" content="SketchUp Mastery Course">
<meta property="og:description" content="Learn SketchUp from beginner to professional">
<meta property="og:image" content="https://your-site.com/preview.jpg">
```

---

## Analytics (Optional)

### Add Google Analytics

1. Create GA4 property
2. Get tracking ID
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Commit and push

---

## Going Live Checklist

Before sharing widely:

- [ ] All modules complete and tested
- [ ] Progress tracker works
- [ ] Links all functional
- [ ] Mobile responsive checked
- [ ] Fast page load (test with PageSpeed Insights)
- [ ] No broken links
- [ ] Custom domain configured (if desired)
- [ ] Analytics set up (if desired)
- [ ] Social sharing images added (if desired)

---

## Sharing Your Course

**Direct link:**
```
https://your-site-name.netlify.app
```

**Social media caption:**
```
🏗️ Free SketchUp Mastery Course
From complete beginner to professional designer in 30 hours.

✅ 10 comprehensive modules
✅ 2 portfolio projects
✅ Business guidance
✅ 100% practical

Start learning: [your-link]

#SketchUp #3DDesign #InteriorDesign #OnlineLearning
```

---

## Maintenance

### Regular Updates

1. **Add new content** as SketchUp evolves
2. **Update pricing** in Module 10 (market changes)
3. **Add user testimonials** (when students complete)
4. **Fix broken links** (check quarterly)

### Version Control

- Tag major releases: `git tag v1.0`
- Keep changelog of significant updates
- Archive old versions

---

## Support & Community

**Questions?**
- Check SketchUp forums
- SketchUcation community
- YouTube tutorials
- Reddit r/Sketchup

**Found a typo or error?**
- Open GitHub issue
- Submit pull request
- Email maintainer

---

## Success Metrics

Track your course impact:

**Student metrics:**
- Course completions
- Time to complete
- Portfolio pieces created
- First client landed

**Site metrics:**
- Monthly visitors (Google Analytics)
- Most popular modules
- Bounce rate
- Time on page

---

## Next Steps

1. **Deploy your site** (choose Option 1 or 2 above)
2. **Test thoroughly** (all links, mobile, etc.)
3. **Share with your girlfriend** (the primary learner!)
4. **Gather feedback** (what works, what's confusing)
5. **Iterate and improve** (courses evolve)

---

<div align="center">

**🎉 Your course is ready to change lives!**

*Deployment is just the beginning.*  
*Now watch your girlfriend become a SketchUp master!*

**Good luck! 🚀**

</div>

---

## Quick Reference

**Repository:** `https://github.com/ZacharyVorsteg/sketch-up.git`  
**Local path:** `/Users/zachthomas/Desktop/sketch-up-course/`  
**Tech stack:** HTML, CSS, Markdown, Netlify  
**Updates:** Push to main branch for auto-deploy  

**Deploy commands:**
```bash
cd /Users/zachthomas/Desktop/sketch-up-course
git add -A
git commit -m "Update course content"
git push origin main
```

**That's it! Happy deploying! 🚀**

