import { Injectable } from '@angular/core';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';
import { CComponent } from '../c/c.component';

@Injectable()
export class DynamicComponentService {
  private components = {
    componentA: AComponent,
    componentB: BComponent,
    componentC: CComponent
  }
  constructor() { }

  getComponent(componentName) {
    return this.components[componentName];
  }
}
