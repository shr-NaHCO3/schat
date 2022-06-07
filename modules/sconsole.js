module.exports = {
    sconsole: class sconsole{
        constructor(filename){
            this.filename = filename;
        }

        info(code, mes){
            console.log(`\x1B[2m${new Date().toString().slice(16,24)} ${0?__filename:"\b"}\x1B[0m \x1B[34m[info ${code}]\x1B[0m ${mes}`)
        }

        warn(code, mes){
            console.log(`\x1B[2m${new Date().toString().slice(16,24)} ${0?__filename:"\b"}\x1B[0m \x1B[33m[warn ${code}]\x1B[0m ${mes}`)
        }

        err(code, mes){
            console.log(`\x1B[41m${new Date().toString().slice(16,24)} ${0?__filename:"\b"} [ERR ${code}] ${mes}\x1B[0m`)
        }

        mes(code, mes){
            console.log(`\x1B[2m${new Date().toString().slice(16,24)} ${0?__filename:"\b"}\x1B[0m \x1B[32m[mess ${code}]\x1B[0m ${mes}`)
        }
    }
}