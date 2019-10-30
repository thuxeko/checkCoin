import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/baseService.service';

@Component({
  selector: 'app-check-eth',
  templateUrl: './check-eth.component.html',
  styleUrls: ['./check-eth.component.css']
})
export class CheckEthComponent implements OnInit {
  //#region Pagination
  page: number = 1;
  pageSize: number = 20;
  collectionSize: number = 0;
  //#endregion

  //#region Object
  loaiTimKiem: string = 'L1';
  addrWallet: string = '';
  hasImport: number = 0;
  tokenName: string;
  tokenDecimals: number;
  tokenContract: string;
  //#endregion

  //#region Table
  lstCol: any[];
  lstWallet: any[];
  lstObjPagination: any[] = [];
  lstObjShow: any[] = [];
  //#endregion

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.lstCol = [
      { field: 'stt', label: 'STT', width: '50px', align: 'center' },
      { field: 'addrw', label: 'Địa chỉ ví', width: '', align: 'center' },
      { field: 'total', label: 'Số lượng', width: '', align: 'center' }
    ]
  }

  changeLoai() {
    if (this.loaiTimKiem == 'L1') {
      this.hasImport = 0
    }
    else {
      this.hasImport = 1;
    }
  }

  getName() {
    this.baseService.getNameToken(this.tokenContract).subscribe(dt => {
      this.tokenName = dt.name;
      this.tokenDecimals = dt.decimals;
    });
  }

  checkWallet() {
    //Đọc các ví để add vào list Tổng
    this.lstWallet = this.addrWallet.replace(/(\r\n|\n|\r)/gm, "").split(';');

    //Lấy tổng số bản ghi để chia phân trang
    this.collectionSize = this.lstWallet.length;

    this.onGetData();
  }

  onGetData() {
    //Lấy bản ghi theo phân trang(20 bản ghi/1 trang)
    this.lstObjPagination =
      this.lstWallet.map((obj) => obj)
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    //Bind dữ liệu lên table - Check luôn số dư có trong ví
    let x = 0;
    let y = 0;

    for (const element of this.lstObjPagination.filter(x => x != "")) {
      
      let abc = setInterval(() => {
        this.baseService.getBalanceWallet(element, this.tokenContract).subscribe(dt => {
          if (dt.status == 1) {
            clearInterval(abc);
            let valueBalance = dt.result.slice(0, dt.result.length - this.tokenDecimals) + "." + dt.result.slice(dt.result.length - this.tokenDecimals, dt.result.length);
  
            let obj = {
              addrw: element,
              total: valueBalance
            };
  
            this.lstObjShow.push(obj);
          }
        });
      },100);
    }

    // this.lstObjPagination.filter(x => x != "").forEach(element => {
    //   this.baseService.getBalanceWallet(element, this.tokenContract).subscribe(dt => {
    //     if (dt.status == 1) {
    //       let valueBalance = dt.result.slice(0, dt.result.length - this.tokenDecimals) + "." + dt.result.slice(dt.result.length - this.tokenDecimals, dt.result.length);

    //       let obj = {
    //         addrw: element,
    //         total: valueBalance
    //       };

    //       this.lstObjShow.push(obj);
    //     }
    //   });
    // });

    console.log(this.lstObjShow);
  }
}
