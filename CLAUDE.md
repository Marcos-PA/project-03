# Convenções do projeto

## Back (back/, FastAPI + uv)
- Dependências: sempre `uv add <pacote>` (dev: `uv add --dev`). Nunca pip.
- Nova rota: `app/api/routes/<recurso>.py` com um `APIRouter`, registrado em `app/api/router.py`.
  Todas as rotas ficam sob o prefixo `/api`.
- Banco na rota: parâmetro `db: DbSession` (de `app.db.session`).
- Model SQLAlchemy: `app/models/<recurso>.py`, herdando `Base`; importar em `app/models/__init__.py`.
- Schemas Pydantic (entrada/saída): `app/schemas/<recurso>.py`. Nunca retornar model direto.
- Regra de negócio: `app/services/<recurso>.py`. Rotas ficam finas.
- Mudou model → `uv run alembic revision --autogenerate -m "..."` e revisar o arquivo gerado.
- Config/segredos: `app/core/config.py` + `.env`. Nada hardcoded.
- Antes de concluir: `uv run ruff check . && uv run pytest`.

## Front (front/, React + Vite + TS + Tailwind)
- Estilo só com classes Tailwind. Sem arquivos .css novos.
- Chamadas HTTP só via `src/services/` usando a instância `api` de `services/api.ts`.
  Caminhos relativos (`/users`), nunca URL completa.
- Tipos das respostas da API em `src/types/`, espelhando os schemas do back.
- Páginas em `src/pages/` (registradas em `App.tsx`), componentes reutilizáveis em `src/components/`,
  hooks em `src/hooks/`, layouts em `src/layouts/`.
- Antes de concluir: `npm run build`.
