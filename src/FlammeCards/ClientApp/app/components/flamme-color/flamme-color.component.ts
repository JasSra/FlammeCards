import { Component, Input } from '@angular/core';

@Component({
    selector: 'flammeColor',
    templateUrl: './flamme-color.component.html',
    styleUrls: ['./flamme-color.component.css']
})
export class FlammeColorComponent {

    @Input() color:string;

}
