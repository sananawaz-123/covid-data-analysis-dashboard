# COVID Data Analysis Dashboard

**Project by Shaik Sana Nawaz**

A responsive web dashboard built with **React.js** (frontend) and **Flask** (backend) to visualize COVID-19 data.
This version uses a **static sample dataset** (offline-friendly) stored in `backend/sample_data.json`.

## Features
- Interactive charts displaying cases, recovered, deaths, and active counts.
- Region-based filter to select countries.
- Responsive UI and cross-browser compatibility.
- Simple Flask backend serving static sample data via REST endpoints.

## Tech Stack
- Frontend: React.js, Chart.js, Axios, Bootstrap
- Backend: Flask, Python
- Data: Static JSON sample (backend/sample_data.json)

## Run Locally

### 1) Start the backend
```bash
cd backend
python3 -m venv venv     # optional but recommended
source venv/bin/activate # on Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python app.py
```
Backend runs on `http://127.0.0.1:5000` and exposes endpoints:
- `GET /api/covid` - list all countries
- `GET /api/covid/<country>` - get data for a country (case-insensitive)

### 2) Start the frontend
```bash
cd frontend
# ensure Node.js and npm are installed
npm install
npm start
```
Frontend runs on `http://localhost:3000` and expects backend at `/api` (use proxy or run with CORS in production).

## Notes
- To use a live API (disease.sh), replace frontend axios calls with `https://disease.sh/v3/covid-19/countries/<country>` and remove/disable the Flask backend.
- Add your own dataset by editing `backend/sample_data.json`.

---
