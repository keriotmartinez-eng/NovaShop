#!/bin/sh

echo "Esperando a la base de datos PostgreSQL..."
while ! nc -z db 5432; do
sleep 0.1
done
echo "PostgreSQL iniciado correctamente."

if [ -f manage.py ]; then
python manage.py migrate --noinput
fi

exec "$@"
