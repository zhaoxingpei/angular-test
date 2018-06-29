import { BrowserModule } from "@angular/platform-browser"; //提供启动和运行浏览器应用的那些基本的服务提供商
import { NgModule } from "@angular/core"; //NgModule是组织Angular应用必须的

import { AppComponent } from "./app.component";
import { HeroesComponent } from './heroes/heroes.component';
//在 @NgModule 的元数据中配置我们导�, HeroesComponent��的模块,因为我们需要依赖 BrowserModule
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
