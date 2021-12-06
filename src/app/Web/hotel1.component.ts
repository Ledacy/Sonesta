import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "hotel1-web",
    templateUrl: "./hotel1.component.html",
    styleUrls: ["./hotel1.component.css"]
})
export class Hotel1WebComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}