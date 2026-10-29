# Week 1: React forms and routing

| | |
| --- | --- |
| **Topic** | React forms and routing |
| **Learn** | Forms, validation, routes and fetch basics |
| **Deliverable** | List, detail and task form screens |
| **Review criteria** | Validation and direct links work |
| **Status** | Ready for review |

## What I built
A small task board with three screens:

- **Task list** at `/tasks`. It loads tasks with `fetch` and links each one to its detail page.
- **Task detail** at `/tasks/:id`. It shows one task and has a "not found" message for unknown IDs.
- **Task form** at `/tasks/new`. It creates a task, then opens the new task's detail page.

## What I learned
- **Forms:** controlled inputs, a `submit` handler and `preventDefault`.
- **Validation:** checking values before saving and showing an error under each field.
- **Routes:** React Router `Routes`, `Link`, `NavLink`, `useParams` and `useNavigate`.
- **Fetch basics:** loading data with `fetch`, plus loading and error states.

## Review criteria: how they are met

**Validation works**
- Title is required and must be at least 3 characters.
- Description can be up to 200 characters.
- Priority must be chosen.
- Errors appear under the field and update as the user fixes them.

**Direct links work**
- Each page loads its own data, so opening `/tasks/2` in a new tab or refreshing it still works.
- Unknown URLs show a "Page not found" screen.

## Run locally

```bash
git clone https://github.com/Suman748/week1-tasks.git
cd week1-tasks
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

## Try it
1. Open `/tasks` and check the list.
2. Open `/tasks/new` and press **Save task** with empty fields to see the errors.
3. Save a valid task and check that you land on its detail page.
4. Paste `/tasks/2` into a new tab to check the direct link.
5. Open `/tasks/999` to see the "Task not found" message.

## Tech stack
React 18, React Router 6, Vite

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
