import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  // appt: Appointment = {
  //   id: 1,
  //   title: "work on projects",
  //   date: new Date("2025/3/12")
  // }
  newApptTitle: string = ""
  newApptDate: Date = new Date()

  list: Appointment[] = []


  ngOnInit(): void {
    //whenver the list is updated, update the lcoalStorage
    //when we load, we will use a local var 
    // to store the current string val 

    let savedAppts = localStorage.getItem("appointments")

    //if it's null, we will set our list to empty
    //if has something, we use local storage and parse it

    this.list = savedAppts ? JSON.parse(savedAppts) : []
  }

  addAppointment(){

    if(this.newApptDate && this.newApptTitle.trim().length){
      let newAppt : Appointment = {
      id: Date.now(),
      title: this.newApptTitle,
      date: this.newApptDate
    }
      this.list.push(newAppt)
      localStorage.setItem("appointments", JSON.stringify(this.list))
      //after added, reset 
      this.newApptDate = new Date()
      this.newApptTitle = ""

    }
    

  
  }

  removeAppointment(index:number){
    this.list.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.list))


  }


}
