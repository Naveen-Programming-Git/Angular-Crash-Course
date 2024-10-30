import { CourseService } from './../services/course.service';
import { CommonModule, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgModel } from '@angular/forms';
import { get } from "http";
import { SummaryPipe } from '../pipes/summary.pipe';


@Component({
    selector: 'courses', // CSS: <courses></courses>
    standalone: true,
    imports: [NgFor, FormsModule, CommonModule, SummaryPipe],
    providers: [CourseService],
    //template: '<h2>{{ title}}</h2>'
    //template: '<h2>{{ "Title: " + title}}</h2>'
    // template: '<h2>{{ getTitle() }}</h2>'
    // template: `<h2>{{ getTitle() }}</h2>
    //             <ul>
    //                 <li *ngFor="let course of Courses">
    //                     {{ course }}
    //                 </li>
    //             </ul>                               
    //             `
    // template: `
    //             <img src="{{ imageUrl }}" />
    //             <img [src]="imageUrl" /> 
    //             `
    // template: `<table>
    //             <tbody>
    //             <tr>
    //                 <td [attr.colspan]="colSpan">Test</td>
    //             </tr>
    //             </tbody>
    //             </table> 
    //             `
    // template: `<button class="btn btn-primary" [class.Active]="isActive">Click Me</button>`
    // template: `<div (click)="onDivClick()">
    //             <button class="btn btn-primary" [style.backgroundColor]="isActive?'blue':'green'" 
    //             (click)="onClick($event)">Save</button>
    //             </div>`
    // template: `<input [(ngModel)]="email" (blur)="onBlur()" />`
    // template: `{{course.title | uppercase | lowercase}} <br/>
    //             {{course.students | number }} <br/>
    //             {{course.rating | number:'2.1-3'}} <br/>
    //             {{course.price | currency}} <br/>
    //             {{course.price | currency:'AUD':true:'4.1-3'}} <br/>
    //             {{course.releaseDate | date:'shortDate'}} <br/>`
    template: `<p>{{ text | summary:25 }}</p>`
})

export class CourseComponent {    
    Courses;
    email: any = 'default@text.com';
    course: any = {
        title: "The Complete Angular",
        students: 30123,
        rating: 4.9745,       
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    text: any = `A Decimal Point can be defined as a point or a dot which is used to separate a whole number from 
    the fractional part of a number. It is also known as Decimal Mark. The symbol of decimal point is (.). 
    We use decimals in our daily life as well.`;
    constructor(courseService: CourseService) {
        this.Courses = courseService.getCourses();
    }

    onBlur() {
        console.log('Entered', this.email);
    }

    onClick($event: any) {
        $event.stopPropagation(); //To stop event bubbling to parent elements (in here, <div>).
        console.log('Save Clicked', $event);
    }
    onDivClick() {
        console.log('Div Clicked');
    }

    title = "List of Courses";
    imageUrl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    getTitle() {
        return this.title;
    }
    colSpan = 2;
    isActive = false;

    
}