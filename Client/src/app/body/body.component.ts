import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from 'angularx-social-login';

 


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  data = [];
  constructor(public authService:AuthService) { }
  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });

  $(document).ready(function () {
    $('.sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $(this).removeClass('active');
    });
});
}

  signOut(){
    this.authService.signOut();
  }
}
