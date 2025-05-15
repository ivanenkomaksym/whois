# Whois

A simple web application for Whois lookups and domain availability checks. Features a modern React frontend, secure Express backend, and robust rate limiting. Great for quickly checking domain registration details and availability status, with security and scalability in mind.

![Alt text](docs/ui.png?raw=true)

## Local Development

- **Frontend:**
  1. Navigate to the `frontend` folder.
  2. Run `npm install` to install dependencies.
  3. Start the dev server with `npm run dev`.

- **Backend:**
  1. Navigate to the `backend` folder.
  2. Run `npm install` to install dependencies.
  3. Start the server with `npm run dev` or `npm start`.

## Deployment & Architecture

- **CI/CD:** Automated with GitHub Actions.
- **Backend:** Deployed to Google Cloud Run.
- **Frontend:** Deployed to Cloudflare Pages.
- **API Proxy:** A Cloudflare Worker acts as an API proxy, ensuring only this frontend can call the backend by using a secret header for authentication.