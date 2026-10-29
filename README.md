# Week 1: React forms and routing

A small task board built with React, React Router and Vite.

## Task details
- **Topic:** React forms and routing
- **Learn:** Forms, validation, routes and fetch basics
- **Deliverable:** List, detail and task form screens
- **Review criteria:** Validation and direct links work

## Screens
- `/tasks`: task list, loaded with `fetch`
- `/tasks/new`: new task form
- `/tasks/:id`: task detail

## Validation
- Title is required (at least 3 characters)
- Description is up to 200 characters
- Priority must be chosen

## Direct links
Each page loads its own data, so opening `/tasks/2` in a new tab or refreshing the page works. Unknown URLs show a "Page not found" screen.

## Run locally
```bash
git clone https://github.com/Suman748/week1-tasks.git
cd week1-tasks
npm install
npm run dev
```
Open the address Vite prints, usually http://localhost:5173.
