// 从Angulsr核心模块里引入了component装饰器
import { Component } from '@angular/core';

@Component({
  /**
   * 组件元数据 Angular通过这里树形渲染组件并执行逻辑
   * selector时css选择器，表示组件通过app-root来调用，index.html中有个<app-root></app-root>
   * templateUrl 组件的模板，定义了组件布局和内容
   * styleUrls   该模板引用哪个样式
   */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '第一次学习Angular';
}
