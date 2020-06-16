import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  constructor(private httpClient: HttpClient) { }

  public getCSVSpreadsheetRaw(url: string, separator = ","): Observable<string[][]> {
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "text/csv; charset=utf-8"
    });
    return this.httpClient
      .get(url, { responseType: 'text', headers: headers })
      .pipe(
        map((textData: string) => {
          return textData.split("\n").map((line) => {
            return line.replace("\r", "").split(separator)
          });
        })
      );
  }

  public getCSVObjects<T>(url: string, separator = ",", autoParse = true): Observable<T[]> {
    return this.getCSVSpreadsheetRaw(url, separator)
      .pipe(
        map((rows: string[][]) => {
          if (rows.length < 2) {
            return [];
          }
          return rows.slice(1).map((row) => {
            let object = {} as T;
            for (var i = 0; i < row.length; i++) {
              try {
                const key = rows[0][i];
                const value = row[i];
                if (key) {
                  if (autoParse) {
                    object[key] = this.autoParseString(value);
                  } else {
                    object[key] = value;
                  }
                }
              } catch (ex) {
                console.debug(`Row ${i} parsing error`, ex);
              }
            }
            return object;
          });
        })
      );
  }

  public autoParseString(value: string): any {
    if (!value || !value.trim) {
      return;
    }
    switch (value.trim().toLowerCase()) {
      case "true": return true;
      case "false": return false;
      case "undefined": return undefined;
      case "null": return null;
    }
    const integerRegex = /^\d+$/;
    if (value.match(integerRegex)) {
      return parseInt(value);
    }
    if (value === "NaN") {
      return value;
    }
    if (value.indexOf(".") > -1) {
      const before = value.split(".")[0].replace("-", "");
      const after = value.split(".")[1];
      if (before.match(integerRegex) && after.match(integerRegex)) {
        return parseFloat(value);
      }
    }
    return value;
  }

}
