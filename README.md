# نظام الشهيد الإلكتروني

Arabic RTL management dashboard with a Laravel 13 + SQLite backend and a vanilla JavaScript frontend.

## Stack

- Laravel 13.31 / PHP 8.3
- SQLite database at `database/database.sqlite`
- REST API under `/api`
- Vite frontend under `client/`

## Run locally

```bash
composer install
php artisan migrate:fresh --seed
php artisan serve --host=127.0.0.1 --port=8000
```

In a second terminal:

```bash
pnpm install
pnpm dev
```

The frontend uses `http://127.0.0.1:8000/api` automatically when served on Vite port 3000. To use another backend URL, define `window.__API_BASE__` before loading the frontend.

## API endpoints

| Endpoint | Purpose |
| --- | --- |
| `GET /api/health` | Backend, Laravel, and database health |
| `GET /api/dashboard` | Dashboard counts and data-source metadata |
| `GET /api/martyrs` / `{id}` | Martyr records and detail |
| `GET /api/families` / `{id}` | Family records and members |
| `GET /api/members` / `{id}` | Family members, insurance, and student relation |
| `GET /api/students` / `{id}` | Detailed education records |
| `GET /api/services` / `{id}` | Services and beneficiaries |

The demo seeder creates connected martyrs, families, family members, students, and services. The frontend hydrates its tables and dashboard counts from these API responses after demo login; it only falls back to bundled demo rows when the backend is unavailable.
