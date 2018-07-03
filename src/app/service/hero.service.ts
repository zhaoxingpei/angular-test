/**
 * 这个新的服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器
 */
import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-data/heroes'
import { Observable, of } from 'rxjs'
import { Hero } from '../component/hero'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('aaa:111');
    // of(HEROES) 会返回一个Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    return of(HEROES); 
  }
}
