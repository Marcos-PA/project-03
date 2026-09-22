from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str

class TaskResponse(BaseModel): 
    id: int
    title: str
    description: str | None = None
    done: bool
    model_config = {"from_attributes": True}
