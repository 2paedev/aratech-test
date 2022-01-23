import { Component, Input } from '@angular/core'
import { INews } from '../../models/news.model'

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() info: INews
}
