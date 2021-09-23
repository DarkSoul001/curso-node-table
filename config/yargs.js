const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'muestra la tabla de multiplicar en la consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    describe:'multiplicar hasta'
                })
                .check((argv,option)=>{
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un número'
                    }
                    if(isNaN(argv.h)){
                        throw 'hasta debe ser un numero'
                    }
                    return true
                })
                .argv

module.exports=argv;