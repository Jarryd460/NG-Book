import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article('', '', 0);
  }

  voteUp() : boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {

  }
}
