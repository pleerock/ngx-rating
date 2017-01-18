# ngx-rating

Simple rating control for your angular2 applications using bootstrap3. Does not depend of jquery.
If you want to use it without bootstrap - simply create proper css classes.
Please star a project if you liked it, or create an issue if you have problems with it.

![angular 2 rating](https://raw.githubusercontent.com/pleerock/ngx-rating/master/resources/rating-example.png)

## Installation

1. Install npm module:

    `npm install ngx-rating --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ngx-rating": "node_modules/ngx-rating"
        },
        "packages": {
            "ngx-rating": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

Import `RatingModule` module in your app, and use a component in your html:

```html
<rating [(ngModel)]="model.rating"
        [max]="5"
        iconClass="fa-star"
        fullIcon="★"
        emptyIcon="☆"
        [readonly]="false"
        [disabled]="false"
        [required]="true"
        [float]="true"
        [titles]="['one', 'two', 'three', 'four', 'five']">
</rating>
```

* `<rating>`:
    * `[(ngModel)]="variable"` Model to be changed on rating selection. This argument is **required**.
    * `[max]="number"` Number of rating items (rating stars). Default is **5**.
    * `iconClass="string"` Css class to be used as an icon. Default is **star-icon**.
    * `fullIcon="string"` UTF character to be used as filled rating item. Default is **★**.
    * `emptyIcon="string"` UTF character to be used as empty rating item. Default is **☆**.
    * `[readonly]="true|false"` Indicates if rating should be readonly. If rating is readonly then use cannot vote, only can see a result. Default is **false**
    * `[disabled]="true|false"` Indicates if rating should be disabled. If rating is disabled then it will not be shown. Default is **false**
    * `[required]="true|false"` Indicates if rating should be required. With this you can use ngForm and validation capabilities of angular 2. Default is **false**
    * `[float]="true|false"` If set to true then user can select half-of-star too. Default is **false**
    * `[titles]="true|false"` Array of titles for each item in the rating.

## Sample

```typescript
import {Component} from "@angular/core";
import {RatingModule} from "ngx-rating";

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

</div>
`,
    directives: [Rating]
})
export class Sample1App {

    starsCount: number;

}

@NgModule({
    imports: [
        // ...
        RatingModule
    ],
    declarations: [
        App
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ngx-rating/tree/master/sample) for more examples of
usages.
