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

# Example Usage
add_task("Learn Git")
add_task("Create Python project")
view_tasks()

