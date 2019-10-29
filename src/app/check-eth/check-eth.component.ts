import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-eth',
  templateUrl: './check-eth.component.html',
  styleUrls: ['./check-eth.component.css']
})
export class CheckEthComponent implements OnInit {
  loaiTimKiem: string = 'L1';
  addrWallet: string = '';
  hasImport: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeLoai() {
    if (this.loaiTimKiem == 'L1') {
      this.hasImport = 0
    }
    else {
      this.hasImport = 1;
    }
  }
}
