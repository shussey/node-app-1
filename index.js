var http = require("http");

var Analytics = require('analytics-node');
var analytics = new Analytics('dLGM1pbrDkaTg00AkT97pHlBRrRf2LuW');

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   var userId = 'f4ca124296';
   var userName = "Joe Smith";
   var email = "js@initech.com";
   var greeting = "Hola";
   response.write('<HTML>');
   response.write('<HEAD>');
   response.write('<TITLE>Greeting page</TITLE>');

   response.write(' <script type="text/javascript">');
   response.write('   window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};');
   response.write('   var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");');
   response.write('   a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";');
   response.write('   var n=document.getElementsByTagName("script")[0];');
   response.write('   n.parentNode.insertBefore(a,n);');
   response.write('   for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;');
   response.write('   c<p.length;');
   response.write('   c++)heap[p[c]]=o(p[c])};');
   response.write('   heap.load("884223102");');
   response.write(' </script>');
   
   response.write('</HEAD>');
   response.write('<BODY BGCOLOR="FFFFFF">');
   
   response.write('<CENTER>');
   
   // Send the response body as "Hello World"
   response.write(greeting);
   response.write(' ');
   response.write(userName);
   response.write('</CENTER>');
   
   // Heap Image for 50000K sessions
   response.write('<BR>');
   response.write('<a href="https://heapanalytics.com/?utm_source=badge"><img style="width:108px;height:41px" src="//heapanalytics.com/img/badge.png" alt="Heap | Mobile and Web Analytics" /></a>');
   response.write('</BODY>');
   response.write('</HTML>');
   
   response.end('\n');
   
   analytics.identify({
     userId: userId,
     traits: {
       name: userName,
       email: email,
       createdAt: new Date('2016-06-14T02:00:19.467Z')
     }
   });
   
   analytics.track({
     userId: userId,
     event: 'Viewed Greeting',
     properties: {
       greeting: greeting
     }
   });
   
   
}).listen(80);

// Console will print the message
console.log('Server running');