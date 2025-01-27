console.log("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # # ")

let chessboard = ' '
for ( let x = 0; x < 8; x++){
    for ( let y = 0; y < 8; y++){
        if (( x + y ) % 2 === 0){
            chessboard += ' '
        }else{
            chessboard += '#'
        }
    }chessboard += '\n'
}
console.log(chessboard)