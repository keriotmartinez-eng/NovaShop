# NovaShop — Plataforma E-Commerce

## 🛠️ Arquitectura y Frameworks Elegidos
- Backend: Django & Django REST Framework (Python 3.11)
- Frontend: React + Vite
- Base de Datos: PostgreSQL 16
- Orquestación: Docker & Docker Compose
- Pruebas Automatizadas: Selenium (E2E) y k6 (Rendimiento)

---

## 🚀 Instrucciones de Arranque

### Prerrequisitos
- Docker Desktop en ejecución.
- Git.

### Pasos para la ejecución

1. Clonar el repositorio:
   git clone https://github.com/keriotmartinez-eng/NovaShop.git
   cd NovaShop

2. Levantar la infraestructura de contenedores:
   docker compose up -d --build

3. Aplicar migraciones de la base de datos:
   docker compose exec backend python manage.py migrate

4. Acceso a la aplicación:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000

5. Ejecutar Pruebas Automatizadas:
   - Pruebas E2E (Selenium):
     docker compose --profile testing run --rm selenium-runner
   - Pruebas de Carga (k6):
     docker compose --profile testing run --rm k6

---

## 🏥 Estado del Sistema y Health Check

![Docker Ps Status](./captura_docker_ps.png)
