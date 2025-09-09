const { update } = require("../controller/users.controller");
const usersDao = require("../dao/users.dao");

const userService={
    get:(userId,callback)=>{
usersDao.get(userId,(error,users)=>{
    if(error) return callback(error,undefined);
    if(users) {
        if(userId==undefined) return callback(undefined,users);
        let user = users.filter((user)=>user.customer_id == userId)[0];
        console.log(user)
        return callback(undefined,[user])};
});
    },
    update:(email,userId,callback)=>{
            usersDao.update(email,userId,(error,result)=>{
                if(error) return callback(error,undefined);
                if(result) return callback(userId,(undefined,result));

            });
        },

    
    delete:(userId,callback)=>{
        usersDao.get.get(userId,(error,users)=>[]);
               let user = users.filter((user)=>user.customer_id == userId[0]);
            return callback(undefined,[user]);
    }
}

module.exports = userService;

// Uncaught TypeError TypeError: users.filter is not a function
//     at <anonymous> (c:\Users\RKSGK\myapp\src\service\user.service.js:18:34)
//     at <anonymous> (c:\Users\RKSGK\myapp\src\dao\users.dao.js:34:29)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\commands\query.js:91:16)
//     at processTicksAndRejections (<node_internals>/internal/process/task_queues:85:11)
//     --- TickObject ---
//     at init (<node_internals>/internal/inspector_async_hook:19:17)
//     at emitInitNative (<node_internals>/internal/async_hooks:202:43)
//     at emitInitScript (<node_internals>/internal/async_hooks:505:3)
//     at nextTick (<node_internals>/internal/process/task_queues:143:5)
//     at done (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\commands\query.js:90:17)
//     at doneInsert (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\commands\query.js:115:17)
//     at resultsetHeader (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\commands\query.js:128:19)
//     at execute (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\commands\command.js:45:22)
//     at handlePacket (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\connection.js:475:34)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\connection.js:93:12)
//     at executeStart (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\packet_parser.js:75:16)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\connection.js:100:25)
//     at emit (<node_internals>/events:519:28)
//     at addChunk (<node_internals>/internal/streams/readable:561:12)
//     at readableAddChunkPushByteMode (<node_internals>/internal/streams/readable:512:3)
//     at Readable.push (<node_internals>/internal/streams/readable:392:5)
//     at onStreamRead (<node_internals>/internal/stream_base_commons:189:23)
//     at callbackTrampoline (<node_internals>/internal/async_hooks:130:17)
//     --- TCPWRAP ---
//     at init (<node_internals>/internal/inspector_async_hook:19:17)
//     at emitInitNative (<node_internals>/internal/async_hooks:202:43)
//     at Socket.connect (<node_internals>/net:1271:7)
//     at connect (<node_internals>/net:245:17)
//     at BaseConnection (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\connection.js:49:27)
//     at BasePoolConnection (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\pool_connection.js:7:5)
//     at PoolConnection (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\pool_connection.js:5:1)
//     at getConnection (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\pool.js:49:20)
//     at query (c:\Users\RKSGK\myapp\node_modules\mysql2\lib\base\pool.js:139:10)
//     at get (c:\Users\RKSGK\myapp\src\dao\users.dao.js:5:14)
//     at get (c:\Users\RKSGK\myapp\src\service\user.service.js:6:10)
//     at get (c:\Users\RKSGK\myapp\src\controller\users.controller.js:8:17)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\route.js:137:13)
//     at dispatch (c:\Users\RKSGK\myapp\node_modules\express\lib\router\route.js:112:3)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:281:22)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:174:3)
//     at router (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:47:12)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:635:15)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:260:14)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:174:3)
//     at router (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:47:12)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at error (c:\Users\RKSGK\myapp\node_modules\serve-static\index.js:121:7)
//     at emit (<node_internals>/events:519:28)
//     at error (c:\Users\RKSGK\myapp\node_modules\send\index.js:270:17)
//     at onStatError (c:\Users\RKSGK\myapp\node_modules\send\index.js:421:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\send\index.js:736:16)
//     at onstat (c:\Users\RKSGK\myapp\node_modules\send\index.js:725:14)
//     at <anonymous> (<node_internals>/fs:197:21)
//     at callbackTrampoline (<node_internals>/internal/async_hooks:130:17)
//     --- FSREQCALLBACK ---
//     at init (<node_internals>/internal/inspector_async_hook:19:17)
//     at emitInitNative (<node_internals>/internal/async_hooks:202:43)
//     at stat (<node_internals>/fs:1661:15)
//     at sendFile (c:\Users\RKSGK\myapp\node_modules\send\index.js:722:6)
//     at pipe (c:\Users\RKSGK\myapp\node_modules\send\index.js:596:8)
//     at serveStatic (c:\Users\RKSGK\myapp\node_modules\serve-static\index.js:125:12)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at cookieParser (c:\Users\RKSGK\myapp\node_modules\cookie-parser\index.js:57:14)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at urlencodedParser (c:\Users\RKSGK\myapp\node_modules\body-parser\lib\types\urlencoded.js:91:7)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at jsonParser (c:\Users\RKSGK\myapp\node_modules\body-parser\lib\types\json.js:110:7)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at logger (c:\Users\RKSGK\myapp\node_modules\morgan\index.js:144:5)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at expressInit (c:\Users\RKSGK\myapp\node_modules\express\lib\middleware\init.js:40:5)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at query (c:\Users\RKSGK\myapp\node_modules\express\lib\middleware\query.js:45:5)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\layer.js:95:5)
//     at trim_prefix (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:317:13)
//     at <anonymous> (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:284:7)
//     at process_params (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:335:12)
//     at next (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:275:10)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\router\index.js:174:3)
//     at handle (c:\Users\RKSGK\myapp\node_modules\express\lib\application.js:174:10)
//     at app (c:\Users\RKSGK\myapp\node_modules\express\lib\express.js:39:9)
//     at emit (<node_internals>/events:519:28)
//     at parserOnIncoming (<node_internals>/_http_server:1168:12)
//     at parserOnHeadersComplete (<node_internals>/_http_common:117:17)
//     --- HTTPINCOMINGMESSAGE ---
//     at init (<node_internals>/internal/inspector_async_hook:19:17)
//     at emitInitNative (<node_internals>/internal/async_hooks:202:43)
//     at connectionListenerInternal (<node_internals>/_http_server:704:10)
//     at defaultTriggerAsyncIdScope (<node_internals>/internal/async_hooks:464:18)
//     at connectionListener (<node_internals>/_http_server:677:3)
//     at emit (<node_internals>/events:519:28)
//     at onconnection (<node_internals>/net:2302:8)
//     at callbackTrampoline (<node_internals>/internal/async_hooks:130:17)
//     --- TCPSERVERWRAP ---
//     at init (<node_internals>/internal/inspector_async_hook:19:17)
//     at emitInitNative (<node_internals>/internal/async_hooks:202:43)
//     at createServerHandle (<node_internals>/net:1859:14)
//     at setupListenHandle (<node_internals>/net:1902:14)
//     at listenInCluster (<node_internals>/net:1997:12)
//     at Server.listen (<node_internals>/net:2102:7)
//     at <anonymous> (c:\Users\RKSGK\myapp\bin\www:28:8)
//     at <anonymous> (<node_internals>/internal/modules/cjs/loader:1706:14)
//     at <anonymous> (<node_internals>/internal/modules/cjs/loader:1839:10)
//     at <anonymous> (<node_internals>/internal/modules/cjs/loader:1441:32)
//     at <anonymous> (<node_internals>/internal/modules/cjs/loader:1263:12)
//     at traceSync (<node_internals>/diagnostics_channel:322:14)
//     at wrapModuleLoad (<node_internals>/internal/modules/cjs/loader:237:24)
//     at executeUserEntryPoint (<node_internals>/internal/modules/run_main:171:5)
//     at <anonymous> (<node_internals>/internal/main/run_main_module:36:49)
