import { Component, effect, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonToggleChange,
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { SharedModule } from '../../shared/shared.module';
import { Todo } from '../model/todo.model';
import { TodosFilter, TodosStore } from '../store/todos.store';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [SharedModule, FormsModule, MatButtonToggleModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent {
  store = inject(TodosStore);
  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    });
  }

  filters = [
    { name: 'All', code: 1 },
    { name: 'Pending', code: 2 },
    { name: 'Completed', code: 3 },
  ];
  selectedFilter = '';
  selectedProducts!: Todo;

  selectProduct(item: any) {
    console.log(item);
  }

  async onDeleteTodo(item: string, event: MouseEvent) {
    event.stopPropagation();

    await this.store.deleteTodo(item);
  }

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }
  onRowSelect(event: any) {
    console.log(event.data);
  }

  onRowUnselect(event: any) {
    console.log(event.data);
  }

  async onTodoToggle(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;

    this.store.updateFilter(filter);
  }
}
