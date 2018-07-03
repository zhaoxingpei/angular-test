//从核心库中导入Component符号，为组件类加入@Component装饰器
import { Component, OnInit } from '@angular/core';
//导入Hero类
import {Hero} from '../hero'
// 导入模拟数据
import {HEROES} from '../../../mock-data/heroes'
// 导入服务
import { HeroService } from '../../service/hero.service'
/**
 * @Component 是拥有为该组件制定Angular所需的元数据
 * cli默认生成三个元数据属性：
 * 1.selector --- 组件选择器
 * 2.templateUrl --- 组件模板文件位置
 * 3.styleUrls --- 组件私有CSS样式表文件位置
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// 导出组件类（类名：文件名改为驼峰）
//想要显示HeroesComponent ，必须加到壳组件AppComponent中
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  hero: Hero = {
    id:1,
    name:'hello world'
  }
  // heroes = HEROES; // mock数据--英雄列表赋值
  heroes : Hero[];
  selectedHero: Hero; // Hero类型数据 (默认选中第一个)
  // 函数，选中某一个人
  onSelect(heroItem: Hero): void {
    this.selectedHero = heroItem;
  }
  // 注入HeroService依赖
  /**
   * 当Angular创建HeroesComponent时，依赖注入系统会把这个heroService参数设置为HeroService对象
   * @param heroService 
   * 声明了私有heroService属性
   * 标记为一个HeroService注入点
   */
  constructor(private heroService:HeroService) {
  }
  // 定义函数，请求heroes列表
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe( heroes => {
      this.heroes = heroes;
    })
  }
  /**
   * 生命周期钩子，创建组建后就会调用ngOnInit，一般进行初始化
   */
  ngOnInit() {
    this.getHeroes()
  }

}
