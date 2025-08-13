# Aiden's Cool Website

A modern, zen-inspired website showcasing computer repair, creative design, and video editing services.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with light grey theme
- **Responsive**: Works perfectly on all devices
- **Dynamic Portfolio**: Automatically displays artwork from the portfolio folder
- **Blog System**: Easy-to-update blog with JavaScript-based content management
- **Contact Form**: Integrated with formsubmit.co for easy email handling
- **Performance Optimized**: Fast loading with lazy loading and optimized animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Analytics**: Google Analytics integration for tracking user interactions

## 📁 File Structure

```
aidenscoolwebsite-1/
├── index.html              # Main homepage
├── contact.html            # Contact page with form
├── blog.html              # Blog listing page
├── blog-template.html     # Template for individual blog posts
├── style.css              # Main stylesheet
├── main.js                # JavaScript functionality
├── images/                # Logo and other images
│   └── logo.png
├── portfolio/             # Your artwork goes here
│   └── README.md
├── blog/                  # Individual blog post files
└── README.md              # This file
```

## 🎨 Adding Portfolio Items

### Quick Start
1. **Drop your images** into the `portfolio/` folder
2. **Images automatically appear** in your portfolio section
3. **Randomly shuffled** each time the page loads

### Supported Formats
- **JPG/JPEG** - Best for photographs
- **PNG** - Best for graphics with transparency
- **WebP** - Modern format with excellent compression
- **GIF** - For simple animations

### Image Recommendations
- **Aspect Ratio**: 16:9 or 4:3 works best
- **Size**: 800x600px minimum, 1920x1080px maximum
- **File Size**: Keep under 2MB for fast loading
- **Quality**: Use high-quality images that represent your work well

### Customizing Portfolio Details
Edit the `portfolioData` array in `index.html` to customize project descriptions:

```javascript
const portfolioData = [
    {
        title: "Your Project Title",
        description: "Adobe Premiere Pro • Color Grading • Motion Graphics",
        category: "Video Editing"
    },
    // Add more projects...
];
```

## 📝 Creating Blog Posts

### Method 1: Using the Blog Template

1. **Copy the template**:
   ```bash
   cp blog-template.html blog/your-new-post.html
   ```

2. **Edit the new file** and replace these placeholders:
   - `BLOG_TITLE` - Your post title
   - `BLOG_DESCRIPTION` - Brief description for SEO
   - `BLOG_KEYWORDS` - Relevant keywords
   - `BLOG_IMAGE` - URL to your featured image
   - `BLOG_URL` - Full URL to your post
   - `BLOG_DATE` - Publication date
   - `BLOG_READ_TIME` - Estimated reading time
   - `BLOG_CATEGORY` - Post category
   - `BLOG_EXCERPT` - Brief summary

3. **Add your content** in the `<article class="article-content">` section

### Method 2: Using JavaScript (Easier)

1. **Open `blog.html`** in a text editor
2. **Find the `blogPosts` array** (around line 400)
3. **Add a new post object**:

```javascript
{
    id: 7, // Increment this number
    title: "Your Blog Post Title",
    excerpt: "Brief description of your post...",
    date: "March 20, 2025",
    category: "Computer Repair",
    readTime: "5 min read",
    image: "path/to/your/image.jpg",
    url: "blog/your-post.html"
}
```

### Blog Post Content Guidelines

#### Writing Tips
- **Keep it concise**: 500-1500 words works well
- **Use headings**: Break content into sections with `<h2>` and `<h3>`
- **Include images**: Visual content engages readers
- **Add code examples**: Use `<code>` for inline code and `<pre><code>` for blocks
- **Use lists**: Make content scannable with `<ul>` and `<ol>`

#### HTML Elements You Can Use
```html
<h2>Section Heading</h2>
<h3>Subsection</h3>
<p>Regular paragraph text...</p>
<blockquote>Important quote or highlight</blockquote>
<code>inline code</code>
<pre><code>// Code block
function example() {
    console.log("Hello World!");
}</code></pre>
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>
<ol>
    <li>Numbered item 1</li>
    <li>Numbered item 2</li>
</ol>
```

## 🔧 Customization

### Changing Colors
Edit the CSS variables in the `<style>` section of each HTML file:

```css
/* Main colors */
--primary-color: #6c757d;
--secondary-color: #495057;
--background-color: #f8f9fa;
--text-color: #495057;
```

### Adding New Pages
1. **Copy an existing page** (e.g., `contact.html`)
2. **Rename it** to your new page name
3. **Update the navigation** in all HTML files
4. **Customize the content** and meta tags

### Updating Contact Form
The contact form uses formsubmit.co. To change the email:
1. **Edit `contact.html`**
2. **Find the form action**: `action="https://formsubmit.co/contact@aidenscoolwebsite.com"`
3. **Replace with your email**: `action="https://formsubmit.co/your-email@domain.com"`

## 📊 Analytics Setup

### Google Analytics
1. **Create a Google Analytics account** at analytics.google.com
2. **Get your Measurement ID** (starts with G-)
3. **Replace `G-XXXXXXXXXX`** in all HTML files with your actual ID
4. **Test tracking** by visiting your site and checking Analytics

### Tracking Events
The site automatically tracks:
- Page views
- Button clicks
- Portfolio item clicks
- Blog post interactions
- Time spent on pages

## 🚀 Deployment

### GitHub Pages
1. **Push your changes** to GitHub
2. **Go to repository settings**
3. **Enable GitHub Pages** in the Pages section
4. **Select your main branch** as source

### Custom Domain
1. **Add your domain** to the CNAME file
2. **Update DNS settings** with your domain provider
3. **Wait for propagation** (can take up to 24 hours)

## 🛠️ Maintenance

### Regular Tasks
- **Update portfolio** with new work
- **Add blog posts** regularly
- **Check analytics** for insights
- **Test contact form** monthly
- **Update content** as needed

### Performance Tips
- **Optimize images** before uploading
- **Keep file sizes small** (under 2MB)
- **Use descriptive file names**
- **Regularly update content** for SEO

## 📞 Support

If you need help with:
- **Adding content**: Follow the instructions above
- **Customization**: Edit the HTML/CSS files
- **Technical issues**: Check the browser console for errors
- **Analytics**: Verify your Google Analytics setup

## 🎯 Quick Commands

### Add a new blog post
```bash
cp blog-template.html blog/your-new-post.html
# Then edit the file
```

### Add portfolio images
```bash
# Simply copy your images to the portfolio/ folder
cp your-image.jpg portfolio/
```

### Update the website
```bash
git add .
git commit -m "Your update message"
git push origin main
```

---

**Remember**: This is your website! Feel free to customize it to match your style and needs. The structure is designed to be easy to update and maintain.
