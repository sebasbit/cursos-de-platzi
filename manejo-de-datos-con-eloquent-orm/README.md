# Curso Básico de Manejo de Datos en Laravel con Eloquent ORM

Instalar dependencias:

```bash
composer install
```

```bash
npm install
```

Compilar assets:

```bash
npm run build
```

Configurar aplicación (modificar varaibles en el archivo **.env**):

```bash
cp .env.example .env
```

Iniciar contenedores (requiere Docker):

```bash
./vendor/bin/sail up -d
```

Crear base de datos y ejecutar migraciones:

```bash
./vendor/bin/sail artisan migrate:fresh --seed
```

Ingresar a la aplicación, por defecto el servidor está escuchando en el puerto 80: http://localhost
