/*
https://workingcopy.app/education/

http-response ^https:\/\/education\.github\.com\/api\/user$ requires-body=1,max-size=0,script-path=scripts/WorkingCopy.js

MitM = education.github.com

*/

$done({body: ’{”student“: true}‘})