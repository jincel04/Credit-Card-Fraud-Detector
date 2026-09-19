# Credit Card Fraud Detector

A browser-only behavioral anomaly detection prototype for the college problem statement: **“Implement an anomaly detection model that flags suspicious financial transactions by comparing them against historical user spending patterns.”**

## Features

- Dashboard with live spending and risk charts
- Transaction analyzer with transparent 0–100 anomaly score and explanations
- Historical transaction table, search, risk filter, and detail dialog
- Alert workflow: New, Reviewing, and Resolved
- Per-user spending profiles based on historical activity
- Browser-side CSV import and validation; sample file at `public/sample-transactions.csv`
- Demo dataset of fictional users, localStorage persistence, and reset button

## Stack

Vite, React, TypeScript, Recharts, lucide-react, and browser localStorage. No backend, database, Python, paid API, or sensitive card data.

## Methodology

For the selected user, the app compares a proposed transaction to prior records. It measures amount ratio to the historical average, unseen category/merchant, unusual hour, new country, new device, and other transactions in the preceding hour. These signals are weighted as amount 28%, merchant/category 16%, time 12%, location 18%, device 12%, and velocity 14%, then normalized to 0–100. The score is an interpretable anomaly/risk signal, not a claim of production banking accuracy.

```
CSV / demo data → localStorage → historical user profile
                                  ↓
new transaction → weighted anomaly engine → score, reasons, recommended demo action
                                  ↓
                 dashboard / history / alert workflow
```

## Run locally

```bash
cd "C:\Users\rohit\Desktop\credit card fraud detection system"
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). Build verification: `npm run build`.

## Deploy to Vercel

This static Vite app is Vercel-ready. In this directory run `npx vercel --prod`, authenticate when prompted, and follow the one-time setup prompts. No environment variables are required.

## Limits and next steps

This demo uses fictional records and local browser persistence. Real fraud systems additionally use supervised models, streaming features, device intelligence, secure identity controls, human review, monitoring, privacy controls, and much larger datasets.
