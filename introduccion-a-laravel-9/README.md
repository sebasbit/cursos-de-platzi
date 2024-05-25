# Curso de Introducción a Laravel 9

Instalar dependencias:

```bash
composer install
```

```bash
npm ci
```

Compilar assets:

```bash
npm run build
```

Configurar aplicación (modificar varaibles en el archivo **.env**):

```bash
cp .env.example .env
```

Crear base de datos y ejecutar migraciones:

```bash
touch database/database.sqlite
```

```bash
php artisan migrate:fresh --seed
```

Ejecutar servidor local:

```bash
php artisan serve
```
