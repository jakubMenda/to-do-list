# Prerequisities

You'll need:

- Docker
- Docker Compose

# Setup

## 1. Create .env files

1. Create ```.env``` file in api directory and fill it with values from ```.env.dist``` (from api directory)
2. Create ```.env``` file in docker/database directory and fill it with values from ```.env.dist``` (from docker/database directory)
3. Create ```.env.local``` file in docker/frontend directory and fill it with values from ```.env.dist``` (from docker/frontend directory)

## 2. Run docker-compose up -d

## 3. Hopefully, you should be good to go.

- Visit frontend on http://localhost:3000
- The API runs on http://localhost:3001. You can explore simple documentation on http://localhost:3001/docs
- Postgres runs on port 5432. Adminer runs on localhost:8080; credentials are
    - server: database:5432
    - username: root
    - password: root
    - database: todolist

Please let me know if anything doesn't work as expected. Happy to help.
