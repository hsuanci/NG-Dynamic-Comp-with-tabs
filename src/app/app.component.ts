import {
  Component,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import {
  DynamicComponentDirective
} from './common/directive';
import {
  DynamicComponentService
} from './common/DynamicComponentService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-comp';
  compList: object = {};
  menuList: Array < string > = ['componentA', 'componentB', 'componentC'];
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;
  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  selectedChange(event: any) {
    // 取得元件
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(event.tab.textLabel));
    // 開啟View Containder
    const viewContainerRef = this.componentHost.viewContainerRef;
    // 判斷是否建立元件
    if (this.compList[event.tab.textLabel] === undefined) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as any).isHidden = true;
      this.compList[event.tab.textLabel] = componentRef;
    }
    this.setHidden(event.tab.textLabel);
  }

  setHidden(componentName: string) {
    for (const item in this.compList) {
      if (item == componentName) {
        (this.compList[item].instance as any).isHidden = false;
      } else {
        (this.compList[item].instance as any).isHidden = true;
      }
    }
  }
}
