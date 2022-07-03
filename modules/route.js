const sconsole = new (new require('./sconsole').sconsole)("route.js")
const sql = require('./sql.js')




function register(data){
    /*
        {
            "id": "",
            "nickname": "",
            "password": ""
        }
    */
    try{
        let infos = JSON.parse(data)
        if(!infos.id || !infos.nickname || !infos.password){
            return {
                success: false,
                reason: "user id, nickname and password must not be undefined",
                code: "000"
            }
        }
        if(infos.id.length < 8 || infos.id.length > 32){
            return {
                success: false,
                reason: "user id too long or too short",
                code: "000"
            }
        }
        if(infos.nickname.length < 8 || infos.nickname.length > 32){
            return {
                success: false,
                reason: "user name too long or too short",
                code: "000"
            }
        }

        
    }catch(err){
        sconsole.err('000', err);
        return {
            success: false,
            reason: err,
            code: "000"
        }
    }
}


module.exports = {
    register,
}