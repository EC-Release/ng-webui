onconnect = (e)=>{
    let port = e.ports[0];

    /*port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }*/

    //port.start();
    setTimeInterval(()=>{
      port.postMessage({status:'ok',time: new Date().toLocaleTimeString()});
    },3000);
}
