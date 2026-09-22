from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    PROJECT_NAME: str = "API"
    API_PREFIX: str = "/api"
    DATABASE_URL: str = "sqlite:///./app.db"
    CORS_ORIGINS: list[str] = ["http://localhost:5173"]


settings = Settings()
