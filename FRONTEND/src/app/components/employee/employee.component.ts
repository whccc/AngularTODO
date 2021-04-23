import { Component, OnInit } from '@angular/core';
//Importando servicio
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(private employeService: EmployeeService) {}
  //Cuando carga el componente
  ngOnInit(): void {
    this.employeService.getEmployees();
    console.log('Cargando useeffect');
  }
}
