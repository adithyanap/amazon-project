import { formatCurrency } from "../scripts/money.js";


if (formatCurrency(2012) ==="20.12"){
    console.log("passed");
}else{
    console.log("failed");
}


if (formatCurrency(0) ==="0.00"){
    console.log("passed");
}else{
    console.log("failed");
}
if (formatCurrency(2000.5) ==="20.01"){
    console.log("passed");
}else{
    console.log("failed");
}