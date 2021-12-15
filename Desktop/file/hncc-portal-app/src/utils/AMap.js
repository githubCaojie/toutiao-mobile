export default function AMapLoader (){
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap)
        } else {
            // var script = document.createElement('script');
            // script.type = "text/javascript" ;
            // script.async = true
            // script.src = 'https://webapi.amap.com/ui/1.0/main-async.js'
            // document.head.appendChild(script)


            var script = document.createElement('script');
            script.type = "text/javascript" ;
            script.async = true
            script.src = 'https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=eec5110f4465596e95ab6da726bce70d'
            script.onerror = reject
            document.head.appendChild(script)
        }
        window.initAMap = () => {
            initAMapUI(); //这里调用initAMapUI初始化
            
            resolve(window.AMap)
        }
    })
}