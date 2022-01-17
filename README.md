![Version](https://img.shields.io/github/package-json/v/soorajmodi/soorajmodicom)
![CI](https://github.com/SoorajModi/soorajmodicom/workflows/CI/badge.svg)
![License](https://img.shields.io/github/license/soorajmodi/soorajmodicom)

# SoorajModi.com

This is the code for my official website [soorajmodi.com](https://soorajmodi.com). Written in React.js in TypeScript, 
alongside tailwind.css. Deployed and hosted on Firebase.

## How to run

Install dependencies
```bash
npm ci
```

Run server on localhost:3000
```bash
npm start
```

Build
```bash
npm run build
```

Run tests
```bash
npm test
```

Build docker image
```bash
docker build -f Dockerfile -t soorajmodicom:prod .
```

Start the docker container, this will open the app on http://localhost:1337/
```bash
docker run -it --rm -p 1337:80 soorajmodicom:prod
```

To manually deploy to Firebase, first login
```bash
firebase login
```

Then in the project directory
```bash
firebase deploy
```
