document.querySelectorAll("th").forEach(function(r,e){r.addEventListener("click",function(){var t=r.closest("table").querySelector("tbody"),n=Array.from(t.querySelectorAll("tr")),c=function(r,e){var t=r.cells[e].innerText.trim();return 2===e||3===e?parseFloat(t.replace(/[^0-9.-]+/g,"")):t};n.sort(function(r,t){var n=c(r,e),o=c(t,e);return n>o?1:n<o?-1:0}),n.forEach(function(r){return t.appendChild(r)})})});
//# sourceMappingURL=index.763e30c3.js.map
