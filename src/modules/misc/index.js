import TABLE_NAMES from "../../tableNames";

const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
  
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };
  
  export const exportToJson = (data, query) => {
    downloadFile({
      data: JSON.stringify(data),
      fileName: `${query}.json`,
      fileType: "text/json",
    });
  };
  
  export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  export const getTableId = (query) => {
    const name = TABLE_NAMES.find((name) => name === query);
    switch(name) {
      case "customers": {
        return "customer ID";
      }
      case "categories": {
        return "category ID";
      }
      case "employee_territories": {
        return "employee ID";
      }
      case "order_details": {
        return "order ID";
      }
      case "orders": {
        return "order ID";
      }
      case "products": {
        return "product ID";
      }
      case "regions": {
        return "region ID";
      }
      case "shippers": {
        return "shipper ID";
      }
      case "suppliers": {
        return "supplier ID";
      }
      case "territories": {
        return "territory ID";
      }
      default:
        return null;
    }
  }

 export const rowData = (query, queryData) => {
    let resArr = queryData.map((item) => {
      const name = TABLE_NAMES.find((name) => name === query);
      let res;
        switch(name) {
          case "customers": {
            res = {
              "customer ID": item[0],
              "company  Name": item[1],
              "contact  Name": item[2],
              "contact  Title": item[3],
              "address": item[4],
              "city": item[5],
              "region": item[6],
              "postal  Code": item[7],
              "country": item[8],
              "phone": item[9],
              "fax": item[10],
            };
            return res;
          }
          case "categories": {
            res = {
              "category ID": item[0],
              "category  Name": item[1],
              "description": item[2],
              "picture": item[3],
            };
            return res;
          }
          case "employee_territories": {
            res = {
              "employee ID": item[0],
              "territory ID": item[1]
            };
            return res;
          }
          case "employees": {
            res = {
              "employee ID":item[0],
              "last  Name":item[1],
              "first  Name":item[2],
              "title":item[3],
              "title  Of  Courtesy":item[4],
              "birth  Date":item[5],
              "hire  Date":item[6],
              "address":item[7],
              "city":item[8],
              "region":item[9],
              "postal  Code":item[10],
              "country":item[11],
              "home  Phone":item[12],
              "extension":item[13],
              "photo":item[14],
              "notes":item[15],
              "reports  To":item[16],
              "photo  Path":item[17]
            };
            return res;
          }
          case "order_details": {
            res = {
              "order ID": item[0],
              "product ID": item[1],
              "unit  Price": item[2],
              "quantity": item[3],
              "discount": item[4]
            };
            return res;
          }
          case "orders": {
            res = {
              "order ID":item[0],
              "customer ID":item[1],
              "employee ID":item[2],
              "order  Date":item[3],
              "required  Date":item[4],
              "shipped  Date":item[5],
              "ship  Via":item[6],
              "freight":item[7],
              "ship  Name":item[8],
              "ship  Address":item[9],
              "ship  City":item[10],
              "ship  Region":item[11],
              "ship  Postal  Code":item[12],
              "ship  Country":item[13]
            };
            return res;
          }
          case "products": {
            res = {
              "product ID":item[0],
              "product  Name":item[1],
              "supplier ID":item[2],
              "category ID":item[3],
              "quantity  Per  Unit":item[4],
              "unit  Price":item[5],
              "units  In  Stock":item[6],
              "units  On  Order":item[7],
              "reorder  Level":item[8],
              "discontinued":item[9],
            };
            return res;
          }
          case "regions": {
            res = {
              "region ID": item[0],
              "region  Description": item[1],
            };
            return res;
          }
          case "shippers": {
            res = {
              "shipper ID": item[0],
              "company  Name": item[1],
              "phone": item[2],
            };
            return res;
          }
          case "suppliers": {
            res = {
              "supplier ID": item[0],
              "company  Name": item[1],
              "contact  Name": item[2],
              "contact  Title": item[3],
              "address": item[4],
              "city": item[5],
              "region": item[6],
              "postal  Code": item[7],
              "country": item[8],
              "phone": item[9],
              "fax": item[10],
              "home  Page": item[11]
            };
            return res;
          }
          case "territories": {
            res = {
              "territory ID": item[0],
              "territory  Description": item[1],
              "region ID": item[2],
            };
            return res;
          }
          default:
            return res;
        }
      });
      return resArr;
}


export const columnData = (columns) => {
    let resArr = columns.map((item) => {
          let res = {
              field: item["Header"],
              headerName: item["Header"],
              headerAlign: 'center',
              align: 'center',
              flex: 1,              
              editable: false,
          };
          return res;
      });
      console.log("res",resArr);
      return resArr;
}