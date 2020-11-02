import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Type,
  AfterViewInit
} from '@angular/core';

import { DashboardComponent } from '../features/hello-world/dashboard/dashboard.component';

@Component({
  selector: 'app-body',
  template: `
    <div>
      <ng-template #container></ng-template>
    </div>
  `,
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements AfterViewInit {
  childComponents: Type<any>[];
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    this.updateChildComponents();
  }

  updateChildComponents(): void {
    this.childComponents = [DashboardComponent];
    for (const componentType of this.childComponents){
      this.addComponent(componentType);
    }
  }

  addComponent(componentType: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const component = this.container.createComponent(componentFactory);
    console.log(component);
  }

}
