#trae los cambios remotos (sin incluirlos en mis branches)
git fetch -a
# traer los cambios e incorporarlos a mi rama (incorpora master al branch en el que estoy)
git pull origin master
# Mergear "some-branch-name" con el branch en el que estoy
git merge some-branch-name
## Si aparecen conflicts
# primero resolverlos usando vscode y despues:
git add .
git merge --continue
## Si ya pushearon, volvear a pushear


git add .
git commit -m "cambios en algo.txt"
git push origin HEAD
Pushear a HEAD e ir a github para crear el pull request y asignar reviewer/s. (Quienes pueden dejar comentarios por algun cambio, o dar el Ok para que se haga el merge. La opción de squash & merge me dijo que es para que la historia de commits se vea mas limpia.)
https://i.postimg.cc/KctN2BF1/01.jpg
https://i.postimg.cc/ncZ1crc0/02.jpg
https://i.postimg.cc/pXZJ9vmx/03.jpg
Esto funciona siempre y cuando no hayan conflictos , como por ejemplo al modificar la misma linea de codigo. (Github te avisa que hay conflictos, en lugar de "this branch has no conflicts with the base branch)
Para resolver conflictos> (Me recomendó hacerlo desde la consola)
Actualizar el master local con un git pull
hacer un checkout a la branch del pull request y correr este comando:
git merge master (nos dice el tipo de conflicto que tenemos)
https://i.postimg.cc/pd89FQs8/vscode.png
para resolverlo:
git add .
git reset
git checkout .   ( Al hacer esto vamos al editor de VScode y vamos a poder ver las lineas de codigo que generan el conflicto, ver como borrar o fusionar el codigo que se pisa)
Asegurarse de guardar el trabajo antes de hacer como si fuera una branch sin conflictos:
git add .
git commit -m "sync master"
git push origin HEAD (editado) 