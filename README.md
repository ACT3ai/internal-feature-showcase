# Feature Demo - GitHub Pages

A beautiful, responsive multi-page GitHub Pages site for showcasing features with embedded YouTube videos, images, and detailed descriptions. The site includes a home page with navigation to various feature subpages.

## 🚀 Quick Start

### 1. Create the GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `feature-demo` (or any name you prefer)
3. Make sure it's set to **Public**
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Push to GitHub

```bash
cd feature-demo
git init
git add .
git commit -m "Initial commit: GitHub Pages demo site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/feature-demo.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/feature-demo/`

GitHub Pages may take a few minutes to deploy. You'll see a green checkmark when it's ready.

## 📝 Customization

### Site Structure

The site consists of:
- **Home Page** (`index.html`): Lists all available feature demos with navigation cards
- **Feature Subpages**: Individual pages for each feature (e.g., `comfy-video-generation.html`)

### Adding New Feature Pages

1. Create a new HTML file (e.g., `my-feature.html`) based on `comfy-video-generation.html`
2. Update the content, videos, and images for your feature
3. Add a new feature card to `index.html` in the `.features-grid` section:
   ```html
   <a href="my-feature.html" class="feature-card">
       <h3>My Feature</h3>
       <p>Description of your feature...</p>
       <div class="feature-tags">
           <span class="tag">Tag 1</span>
           <span class="tag">Tag 2</span>
       </div>
   </a>
   ```

### Adding Your Videos

1. Upload your videos to YouTube
2. Get the video ID from the YouTube URL
3. Replace the `src` attribute in the `<iframe>` tags in the feature pages
   - Example: `https://www.youtube.com/embed/VIDEO_ID_HERE`

### Adding Your Images

1. Add your images to the `images/` folder (JPG, PNG, or WebP format)
2. Update the `src` attributes in the image gallery sections of feature pages
3. Update the captions with your descriptions

### Customizing Content

- Edit `index.html` to change:
  - Home page title and description
  - Feature cards and navigation
- Edit individual feature pages (e.g., `comfy-video-generation.html`) to change:
  - Feature titles and descriptions
  - Feature list items
  - Use cases
  - Any text content

### Styling

All styles are embedded in the `<style>` tag in each HTML file. You can:
- Change colors (currently using purple gradient)
- Modify fonts
- Adjust spacing and layout
- Customize the design to match your brand

## 📁 Project Structure

```
feature-demo/
├── index.html                      # Home page with feature navigation
├── comfy-video-generation.html     # Comfy Video Generation feature page
├── README.md                        # This file
├── .gitignore                       # Git ignore file
└── images/                          # Place your images here
    ├── comfy-example1.jpg
    ├── comfy-example2.jpg
    └── comfy-example3.jpg
```

## 🎨 Features

- ✅ Multi-page structure with home page navigation
- ✅ Fully responsive design (mobile-friendly)
- ✅ Embedded YouTube video support
- ✅ Image gallery with hover effects
- ✅ Modern, clean UI with gradient background
- ✅ Easy to customize and extend
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Navigation between pages

## 📱 Mobile Support

The site is fully responsive and will look great on:
- Desktop computers
- Tablets
- Mobile phones

## 🔗 Sharing

Once deployed, you can share your GitHub Pages URL with anyone. The page is:
- Publicly accessible
- Mobile-friendly
- Easy to share via link

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to customize this template for your needs. You can:
- Add more sections
- Change the color scheme
- Add more videos or images
- Modify the layout
- Add interactive elements

## 💡 Tips

1. **Video Optimization**: Use YouTube for hosting videos to keep your repository size small
2. **Image Optimization**: Compress images before uploading for faster loading
3. **SEO**: Update the `<meta>` tags in the `<head>` section with your specific content
4. **Analytics**: Add Google Analytics if you want to track visitors

## 🐛 Troubleshooting

**Page not loading?**
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for deployment
- Clear your browser cache

**Images not showing?**
- Make sure images are in the `images/` folder
- Check file paths are correct
- Ensure images are committed to the repository

**Videos not embedding?**
- Verify YouTube video URLs are correct
- Make sure videos are set to public or unlisted on YouTube
- Check that the embed code format is correct

---

Happy showcasing! 🎉
