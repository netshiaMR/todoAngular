import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemsCompononet implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  constructor(private todoService: TodoService) {}

  ngOnInit() {}
  // sET Dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
