var son = prompt("son kiriting, biz uni juft yoki toqligini biib beramiz")
while (isNaN(son) || son == 0) {
    var son = prompt("Notog'ri kiritdingiz, sonni boshidan kiriting")
}
 if (son % 2 == 0) {
    alert("Siz juft son kiritdingiz")
    
}
else if (son % 2 == 1) {
    alert("Siz toq son kiritdingiz")
}
    
