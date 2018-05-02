import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


    @ViewChild('logo') logo:ElementRef;
    @ViewChild('logoImg') logoImg:ElementRef;

    ngAfterViewInit(): void {


        setTimeout(() => {
                this.logoImg.nativeElement.classList.add('animated');
                this.logoImg.nativeElement.classList.add('fadeOutUp');
                this.logo.nativeElement.classList.add('fadeOut');

                setTimeout(() => {
                    this.logo.nativeElement.classList.add('hidden');
                }, 800);


            },
            1900);

    }
}

