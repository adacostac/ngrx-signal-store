import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeDragDropService } from 'primeng/api';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DragDropModule } from 'primeng/dragdrop';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TagModule,
    PanelModule,
    MenuModule,
    BadgeModule,
    TabMenuModule,
    TreeModule,
    TableModule,
    DragDropModule,
    TooltipModule,
    DividerModule,
    OverlayPanelModule,
    ToastModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    ToggleButtonModule,
    ListboxModule,
    ProgressSpinnerModule,
    CheckboxModule,
    SelectButtonModule,
  ],
  exports: [
    CommonModule,
    TagModule,
    PanelModule,
    MenuModule,
    BadgeModule,
    TabMenuModule,
    TreeModule,
    TableModule,
    DragDropModule,
    TooltipModule,
    DividerModule,
    OverlayPanelModule,
    ToastModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    ToggleButtonModule,
    ListboxModule,
    ProgressSpinnerModule,
    CheckboxModule,
    SelectButtonModule,
  ],
  providers: [TreeDragDropService],
})
export class SharedModule {}
