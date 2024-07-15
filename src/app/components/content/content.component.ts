import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  cars: any[] = [];
  selectedOption: string = '';
  displayedContent: string[] = [];
  duplicateMessage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.cars = data;
      
      if (this.cars.length > 0) {
        this.selectedOption = this.cars[0].id.toString();
      }
    });
  }

  replaceContent() {
    const selectedCar = this.cars.find(car => car.id.toString() === this.selectedOption);
    if (selectedCar) {
      this.displayedContent = [selectedCar.name];
      this.duplicateMessage = '';
      // console.log('Replaced content with:', selectedCar.name);
    }
  }

  appendContent() {
    const selectedCar = this.cars.find(car => car.id.toString() === this.selectedOption);
    if (selectedCar) {
      if (!this.displayedContent.includes(selectedCar.name)) {
        this.displayedContent.push(selectedCar.name);
        this.duplicateMessage = ''; 
        // console.log('Appended content with:', selectedCar.name);
      } else {
        this.duplicateMessage = 'Content already exists: ' + selectedCar.name;
        alert('Content already exists');
      }
    }
  }
}
