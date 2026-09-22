from sqlalchemy.orm import Session
from app.models.task import Task
from app.schemas import TaskCreate

def create_task(db: Session, task: TaskCreate) -> Task:
    task = Task(title=task.title, done=False)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

def list_tasks(db: Session) -> list[Task]:
    return db.query(Task).all()
