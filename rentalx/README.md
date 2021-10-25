# Instalação swagger-ui-express
yarn add swagger-ui-express

# Instalação
yarn add @types/swagger-ui-express -D

# Para o arquivo swagger.json
"resolveJsonModule": true

---------------------------------------------------------------------------------------------------
# Adicionando o postgress

# Instalando TypeORM e Reflect Metadata
yarn add typeorm reflect-metadata

# Adicionando Postgres
yarn add pg

# Configurando Tsconfig
{
...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
...
}

# DOCKER
docker-compose up --force-recreate


# Verificando ip do container
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentalx