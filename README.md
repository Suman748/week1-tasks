# Week 1: React forms and routing

List, detail and task form screens built with React, React Router and Vite.

## Run locally
    npm install
    npm run dev

## Routes
- /tasks: task list (fetches /tasks.json)
- /tasks/new: new task form with validation
- /tasks/:id: task detail (works as a direct link and after refresh)

## Review criteria
- Validation: title is required (3+ characters), description is max 200 characters, priority is required.
- Direct links: each page loads its own data, so opening a URL directly works.
