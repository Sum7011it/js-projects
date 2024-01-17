function aod(value){
    document.getElementById('display').value +=value;
}
function calculate(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }
    catch(error){
        document.getElementById('display').value = 'error';
    }
}
function clr(){
    document.getElementById('display').value = '';
    console.log('clicked');
}
