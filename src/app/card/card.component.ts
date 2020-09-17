import { Component, Input } from '@angular/core';
import { Project }          from '../models/project';

@Component({
    selector:    'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss']
})
export class CardComponent {

    @Input() project: Project;

    trackByFn(index, item): number {
      return item.id;
    }
}
