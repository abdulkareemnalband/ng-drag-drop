import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'drag-drop';

    verticelData = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];
    horizontalData = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    mixedData = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'];

    dropped(source: string[], event: CdkDragDrop<string[]>) {
        moveItemInArray(source, event.previousIndex, event.currentIndex);
    }
}
