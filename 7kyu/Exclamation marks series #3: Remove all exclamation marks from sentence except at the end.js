/*
Description

Remove all exclamation marks from sentence except at the end.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!!!"
"!Hi"     ---> "Hi"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi"
*/

function remove(string) {
  return (
    string.replace(/!/g, "") +
    (string.match(/!+$/) ? string.match(/!+$/)[0] : "")
  );
}
