import { BeansService } from './../../services/beans.service';
import { Component, OnInit } from '@angular/core';
import { Bean } from 'src/models/bean';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  title = 'ngBean';

  selected: Bean | null = null;

  newBean = new Bean();

  editBean: Bean | null = null;

  beans: Bean[] = [];

  incompletePipe: any;



  constructor(
    private beansService: BeansService
  ) {}

  addBean() {
    this.beansService.create(this.newBean).subscribe({
      next: (result) => {
        this.newBean = new Bean();
        this.reload();
      },
      error: (prob) => {
        console.error('BeanListHttpComponent.addBean(): error creating Bean:');
        console.error(prob);
      },
    });
  }

  setEditBean() {
    this.editBean = Object.assign({}, this.selected);
  }

  updateBean(updatedBean: Bean) {
    this.beansService.update(updatedBean).subscribe({
      next: (result) => {
        this.selected = result;
        this.editBean = null;
        this.reload();
      },
      error: (prob) => {
        console.error('BeanListHttpComponent.updateBean(): error updating Bean:');
        console.error(prob);
      },
    });
  }

  updateCompleted(updatedBean: Bean) {
    this.beansService.update(updatedBean).subscribe({
      next: (result) => {
        this.reload();
      },
      error: (prob) => {
        console.error('BeanListHttpComponent.addBean(): error creating Bean:');
        console.error(prob);
      },
    });
  }

  deleteBean(id: number) {
    this.beansService.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (prob) => {
        console.error('BeanListHttpComponent.addBean(): error creating Bean:');
        console.error(prob);
      },
    });
  }

  getNumberOfBeans() {

    return this.incompletePipe.transform(this.beans).length;
  }

  displayBeans(bean: Bean) {
    console.log(Bean);
  }

  displayTable() {
    this.selected = null;
  }
  viewDetails(selectedBean : Bean) {
    this.selected = selectedBean;
  }

  getBadgeColor(): string {
    let count = this.getNumberOfBeans();
    if (count > 10) {
      return 'bg-danger';
    } else if (count > 5) {
      return 'bg-warning';
    } else   {
      return 'bg-success';
    }
  }

  reload(): void {
    this.beansService.index().subscribe({
      next: (beans) => {
        this.beans = beans;
      },
      error: (problem) => {
        console.error('BeanListHttpComponent.reload(): error loading Bean:');
        console.error(problem);
      },
    });
  }

  ngOnInit(): void {
    this.reload();
  }

}
