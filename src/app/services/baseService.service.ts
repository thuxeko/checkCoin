import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import apiJson from '../../assets/appconfig.json';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {
    private ethplorerAPI: string = apiJson.ethplorerAPI;
    private etherscanAPI: string = apiJson.etherscanAPI;
    private etherscanAPIKey: string = apiJson.etherscanAPIKey;
    constructor(private http: HttpClient) {
    }

    public getNameToken(contract: string): Observable<any> {
        return this.http.get(this.ethplorerAPI + 'getTokenInfo/' + contract + '?apiKey=freekey').pipe(tap(res => {
            return res;
        }));
    }

    public getBalanceWallet(addrW: string, contractTK: string): Observable<any> {
        return this.http.get(this.etherscanAPI + 'api?module=account&action=tokenbalance&contractaddress=' + contractTK + '&address=' + addrW + '&tag=latest&apikey=' + this.etherscanAPIKey).pipe(tap(res => {
            return res;
        }));
    }
}