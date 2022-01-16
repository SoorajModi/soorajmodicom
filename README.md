# SoorajModi.com

This is the code for my official website [soorajmodi.com](https://soorajmodi.com). Written in React.js in TypeScript, alongside tailwind.css.

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
docker build -f Dockerfile.prod -t soorajmodicom:prod .
```

Start the docker container, this will open the app on http://localhost:1337/
```bash
docker run -it --rm -p 1337:80 soorajmodicom:prod
```
