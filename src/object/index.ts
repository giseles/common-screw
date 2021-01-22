// export  default function jspangW() {
//     let web: string = "Hello World";
//     // beizhu 
//     console.log(web);
//   }
  
  export default function isNullOrUnfined  (value:any) {
    if (value === '' || value === undefined || value === null) {
      return true;
    } else {
      return false;
    }
  };