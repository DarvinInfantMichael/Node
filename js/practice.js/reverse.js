
function ReverseString(str) {

    let res ="";

    for(let i= str.length-1;i>=0;i--){
        res +=str[i];
    }

    return res;
}
console.log(ReverseString("hello"));

function lar(arr){
    let a=arr[0];
    let b=arr[0];

    for(let i=1;i<arr.length;i++){

        if(a<arr[i]){

            a=arr[i];
        
        }
        

        if(b>arr[i]){

            b=arr[i];

        }
    }
        console.log( "Largest:",a);
        console.log( "Smallest:",b);
        
    
}

let arr=[10,20,40,2];
lar(arr);

function Dup (arr1){
    
    let dupe =[];

    for(let i =0;i<arr1.length;i++){

        for(let j=i+1;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
                dupe.push(arr1[i]);
            }
        }
    }
    console.log("This is Normal Process:",dupe);
    
}

Dup([10,20,30,10,20]);

function Dup1 (arr1){

    let seen =new Set();
    let ree  =[];

    for(let i=0;i<arr1.length;i++){

        if(seen.has(arr1[i])){
            ree.push(arr1[i]);
        }else{
            seen.add(arr1[i]);
        }
    }
    console.log("This is first Type :",ree);
}
Dup1([10,20,30,10,20]);

function Anagram (str1,str2){

    if(str1.length !== str2.length ){
        return false;
    }

    let count={};

    for(let i=0;i<str1.length;i++){

        if(count[str1[i]]){
            count[str1[i]]++;
        }
        else{
            count[str1[i]]=1;
        }

    }

    for(let i=0;i<str2.length;i++){
        if(!count[str2[i]]){
            return false;
        }
        count[str2[i]]--;
    }
    return true;
}
console.log(Anagram("listen","silent"));

