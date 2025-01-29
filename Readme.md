# Smart Search

Smart Search is a simple html web app that allows users to search comments dynamically through a simple UI and an API.

## Setup

1. Clone the repository:
   `git clone "git@github.com:hanielsd/smart-search.git"`
2. Install dependencies:
   `npm install`
3. Modify CORS settings in node/index.ts if needed:
   `   app.use(
    cors({
    origin: 'http://localhost:3000', // Adjust as needed
    }),
)`

## Scripts

- Serve the ui:
  `npm run dev`
- Run the api server:
  `npm run dev:api`
- Test API:
  `npm run test:api`
- Test UI:
  `npm run test:ui`

## ⭐ Star the Project

If you found this project useful or interesting, please consider giving it a ⭐! It helps others discover it and shows your support. Thank you! 🙏
