/*
*  Facebook - Crypt Message
*  Copyright (C) 2014  Novica Zivkovic
*
*  This program is free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License along
*  with this program; if not, write to the Free Software Foundation, Inc.,
*  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*
*  Contact: n0v1c4z1vk0v1c@gmail.com
*/

// Decrypt


function dekriptujSelektovaniTekst() {
        var html = "";
        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var container = document.createElement("div");
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
        } else if (typeof document.selection != "undefined") {
            if (document.selection.type == "Text") {
                html = document.selection.createRange().htmlText;
            }
        }

        var dt = new Date(); var j; var n; var dan = dt.getDate(); var dekrTekst;
        for(j = 0; j < html.length; j++) {	n = html.charCodeAt(j)+dan;
                                            dekrTekst += String.fromCharCode(n);
                                          }
        dekrTekst = dekrTekst.replace('undefined', '');
        return dekrTekst;
}
var dekriptovaniTekst = dekriptujSelektovaniTekst();
if(dekriptovaniTekst) { alert(dekriptovaniTekst); }      
