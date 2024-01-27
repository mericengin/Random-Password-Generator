
function generateRandomPassword() {

    var chars = [ "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",")","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];

    var passwordLength = 8;
    var password = "";

    for ( var i = 0; i < passwordLength; i++ ) {

    var randomPassword = Math.floor( Math.random() * chars.length );
    password += chars[ randomPassword ];

    }
    
    document.querySelector( ".display" ).value = password;
}


function copyPassword() {

    var displayedPassword = document.querySelector( ".display" );

    displayedPassword.select();
    displayedPassword.setSelectionRange( 0, 99999 );

    navigator.clipboard.writeText( displayedPassword.value );

    alert("Copied The Password : " + displayedPassword.value);

}