# Netlify Deployment Guide

This document provides instructions for deploying this Next.js landing page to Netlify.

## Manual Deployment Steps

1. **Create a Netlify account**
   - Sign up at [netlify.com](https://netlify.com) if you don't have an account

2. **Connect your repository**
   - Go to the Netlify dashboard
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, BitBucket)
   - Select this repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Advanced build settings:
     - Add environment variable: `NETLIFY_NEXT_PLUGIN_SKIP = true`

4. **Deploy the site**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - Once complete, you can access your site at the generated Netlify URL

## Continuous Deployment

Netlify automatically sets up continuous deployment. Any changes pushed to your main branch will trigger a new build and deployment.

## Custom Domain Setup

To use a custom domain:

1. Go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to verify your domain ownership
4. Set up DNS records as instructed by Netlify
5. Enable HTTPS for your site

## Environment Variables

Add any required environment variables through the Netlify UI:
1. Go to "Site settings" > "Environment variables"
2. Click "Add variable" and enter your key-value pairs

## Troubleshooting

- If you encounter build issues, check the build logs in the Netlify dashboard
- Ensure all dependencies are properly listed in package.json
- Verify your Next.js configuration is compatible with Netlify

## Additional Resources

- [Netlify Docs for Next.js](https://docs.netlify.com/configure-builds/common-configurations/nextjs/)
- [Next.js on Netlify](https://www.netlify.com/with/nextjs/)
