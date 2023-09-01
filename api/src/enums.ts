export enum EnvVariables {
    BusinessEnv = 'BUSINESS_ENV',
    DatabaseType = 'DATABASE_TYPE',
    DatabaseHost = 'DATABASE_HOST',
    DatabasePort = 'DATABASE_PORT',
    DatabaseUser = 'DATABASE_USER',
    DatabasePassword = 'DATABASE_PASSWORD',
    DatabaseName = 'DATABASE_NAME',
    JWTSecret = 'JWT_SECRET',
    JWTExpiration = 'JWT_EXPIRATION',
    BCryptSaltRounds = 'BCRYPT_SALT_ROUNDS'
}

export enum BusinessEnvironments {
    Local = 'local',
    Production = 'production',
  }