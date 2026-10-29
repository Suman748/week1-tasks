# Week 1: React forms and routing

A small task board built with React, React Router and Vite. It has list, detail and task form screens.

## Features
- Task list that loads data with `fetch`
- Task detail page for each task
- New task form with validation
- Direct links work: you can open any page by its URL or refresh it

## Tech stack
- React 18
- React Router 6
- Vite

## Getting started

```bash
git clone https://github.com/Suman748/week1-tasks.git
cd week1-tasks
npm install
npm run dev
```

Open the address that Vite prints, usually http://localhost:5173.

## Routes

| Path | Screen |
| --- | --- |
| `/tasks` | Task list |
| `/tasks/new` | New task form |
| `/tasks/:id` | Task detail |

## Form validation
- Title is required and must be at least 3 characters.
- Description can be up to 200 characters.
- Priority must be chosen.

Errors show under each field. After a valid save, you are taken to the new task's detail page.

## Review criteria
- Validation works on the form.
- Direct links work, because each page loads its own data.

## Project structure

```
src/
  api.js           fetch helpers
  App.jsx          routes
  pages/
    TaskList.jsx
    TaskDetail.jsx
    TaskForm.jsx
public/
  tasks.json       sample tasks
```
