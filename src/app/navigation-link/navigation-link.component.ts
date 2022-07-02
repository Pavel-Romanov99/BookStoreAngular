import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  @Input() public link_name: String = "";
  @Input() public href: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
