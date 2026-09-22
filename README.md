# project-03

## Rodando em dev

Back (porta 8000):
    cd back
    uv run uvicorn app.main:app --reload

Front (porta 5173):
    cd front
    npm run dev

O front chama `/api/*`, e o Vite repassa para o back via proxy.

## Migrations (Alembic)

    cd back
    uv run alembic revision --autogenerate -m "descricao"
    uv run alembic upgrade head

Novos models precisam ser importados em `back/app/models/__init__.py`.
