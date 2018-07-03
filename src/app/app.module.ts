/**
 * app.module.ts 代表模块，模块：将一系列的组件、指令、服务整合封装到一起，提供一个完整的功能，模块可以被外部木块引用
 * 根模块：约定类名为AppModule，放到app.module.ts文件。（应用启动时，会加载这个模块，根模块的根组件是app.component.ts
 */

import { BrowserModule } from "@angular/platform-browser"; //提供启动和运行浏览器应用的那些基本的服务提供商
import { NgModule } from "@angular/core"; //NgModule是组织Angular应;
import {FormsModule} from "@angular/forms"

// 使用的组件都必须在app.moudle.ts中引入
import { AppComponent } from "./app.component";
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { MessagesComponent } from './component/messages/messages.component'


@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],// 声明组件的列表
  imports: [BrowserModule, FormsModule], // 该应用所需外部模块列表
  providers: [HeroService],// 声明服务列表
  bootstrap: [AppComponent]
})
export class AppModule {}
