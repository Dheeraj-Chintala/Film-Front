# Movie Landing Page
Film-Front is a responsive movie landing page built with React, Tailwind CSS, and Vite. It features a dynamic 3D poster carousel, and clean responsive design for both desktop and mobile. Perfect for showcasing a curated selection of movies with modern UI effects.
<div align="center">

[![Live on Vercel](https://img.shields.io/badge/Vercel-Live-000000?style=for-the-badge&logo=vercel)](https://film-front.vercel.app/)
[![Docker Image](https://img.shields.io/badge/Docker_Image-View-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/dheerajchintala/film-front)

</div>


---
### Screenshots
| Web View | Mobile View|
|----------|------------|
| <img src="public/screenshots/Screenshot (225).png" height="400px"> | <img src="public/screenshots/Screenshot_2025-09-19-12-50-00-58_40deb401b9ffe8e1df2f1cc5ba480b12.jpg" height="400px"> |
| <img src="public/screenshots/Screenshot (226).png" height="400px"> | <img src="public/screenshots/Screenshot_2025-09-19-12-49-51-95_40deb401b9ffe8e1df2f1cc5ba480b12.jpg" height="400px"> |

---
##  Deployment

This project is deployed in two ways:



###  1. Live Deployment (Vercel)
The production build is hosted on **Vercel** for fast, globally distributed static hosting.

🔗 **Live URL:** https://film-front.vercel.app/



###  2. Docker Deployment (Nginx + Docker)
A production-ready Docker image is available on Docker Hub.  
It includes a multi-stage build (Node → Nginx) with optimized static assets.

#### Pull the Docker Image
```bash
docker pull dheerajchintala/film-front:latest
```
#### Run the container
``` bash
docker run -p 3000:80 dheerajchintala/film-front
```
#### Now open http://localhost:3000

