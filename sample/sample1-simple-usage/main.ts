import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "../../src/index";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- regular rating -->
    <rating [(ngModel)]="starsCount"></rating>
    <br/><br/>

    <!-- rating with 10 stars -->
    <rating [(ngModel)]="starsCount"
            [max]="10">
    </rating>
    <br/><br/>
    
    <!-- rating with custom icons -->
    <rating [(ngModel)]="starsCount"
            fullIcon="◆"
            emptyIcon="◇">
    </rating>
    <br/><br/>
    
    <!-- rating readonly -->
    <rating [(ngModel)]="starsCount"
            [readonly]="true">
    </rating>
    <br/><br/>
    
    <!-- rating disabled -->
    <rating [(ngModel)]="starsCount"
            [disabled]="true">
    </rating>
    <br/><br/>
    
    <!-- rating required -->
    <rating [(ngModel)]="starsCount"
            [required]="true">
    </rating>
    <br/><br/>
    
    <!-- rating with half stars -->
    <rating [(ngModel)]="starsCount"
            [float]="true">
    </rating>
    <br/><br/>
    
    <!-- rating with custom titles -->
    <rating [(ngModel)]="starsCount"
            [titles]="['one', 'two', 'three', 'four', 'five']">
    </rating>
    <br/><br/>
    
    <!-- example in ngFor -->
    <div *ngFor="let item of [1, 2, 3]; let index = index">
        <rating [(ngModel)]="starsCounts[index]"
                [float]="true">
        </rating>
        <br/><br/>
    </div>

</div>
`
})
export class Sample1App {

    starsCount: number;
    starsCounts: number[] = [];

}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RatingModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);