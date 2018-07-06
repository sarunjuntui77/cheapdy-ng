import { Component, OnInit, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input() width: string;
    @Input() height: string;
    @Input() youtube: string;
    @Input() carouselList: any;
    list: any;
    videoUrl: SafeResourceUrl;
    baseEmbed = 'https://www.youtube.com/embed/';
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.setList();
    }

    setList() {
        if (this.youtube !== '') {
            this.baseEmbed += this.youtube + '?rel=0&amp;controls=0&amp;showinfo=0';
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseEmbed);
            this.list = [this.videoUrl].concat(this.carouselList.data);

        } else {
            this.list = this.carouselList.data;
        }
    }
}
