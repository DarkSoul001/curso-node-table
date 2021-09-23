
const fs = require('fs');
const color = require('colors/safe')
const crearArchivo = async (base = 5, listar, hasta=10) => {

    let salida = ''
    let consola = ''
    consola += color.yellow('==================\n')
    consola += color.magenta.underline('   Tabal del: ') + color.green.underline(base) + '\n'
    consola += color.yellow('==================\n')

    // console.clear()
    // console.log(hasta)
    for (let i = 1; i <= hasta; i++) {
        // console.log(`${base} x ${i} = ${base*i}`)
        consola += `${base}` + color.green('x') +`${i} = ${base * i}\n`
        salida += `${base}` + 'x' +`${i} = ${base * i}\n`
    }
    if (listar) console.log(consola)
    // fs.writeFile('tabla-5.txt', consola, (err) => {
    //     if (err) throw err;
    //     console.log('tabla-5.txt creado')
    // })
    try {
        let nombre = `./salida/tabla-${base}.txt`
        
        fs.writeFileSync(nombre, salida)
        return color.red.underline(nombre)
    }
    catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}