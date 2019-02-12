import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todo/todo.component";
import { TodoItemsCompononet } from "./components/todo-item/todo-item.component.ts";

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemsCompononet],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
