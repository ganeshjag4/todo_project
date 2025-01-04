# Simple To-Do List 
# Simple To-Do List
tasks = []

def add_task(task):
    tasks.append(task)
    print(f"Task added: {task}")

def view_tasks():
    print("\nTo-Do List:")
    for i, task in enumerate(tasks, start=1):
        print(f"{i}. {task}")
def delete_task(task_number):
    if 0 < task_number <= len(tasks):
        removed = tasks.pop(task_number - 1)
        print(f"Task removed: {removed}")
    else:
        print("Invalid task number!")


# Example Usage
add_task("Learn Git")
add_task("Create Python project")
view_tasks()

